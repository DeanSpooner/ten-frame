import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { arrayMaker } from "../../helpers/arrayMaker";
import globalStyles from "../../../Global.styles";

interface TouchTableProps {
  countersTouched: number;
  setCountersTouched: React.Dispatch<React.SetStateAction<number>>;
}

const TouchTable: React.FC<TouchTableProps> = ({
  countersTouched,
  setCountersTouched,
}) => {
  const [touchedCountersArray, setTouchedCountersArray] = useState<number[]>(
    []
  );

  const lengthOfFrame: number = 10;

  const addToArray = (num: number) => {
    setTouchedCountersArray([...touchedCountersArray, num]);
    setCountersTouched(countersTouched + 1);
  };

  const removeFromArray = (num: number) => {
    setTouchedCountersArray((item) =>
      item.filter((element) => {
        return element !== num;
      })
    );
    setCountersTouched(countersTouched - 1);
  };

  return (
    <View style={globalStyles.tenFrameContainer}>
      {arrayMaker(lengthOfFrame).map((num) => (
        <TouchableOpacity
          style={globalStyles.cell}
          key={num}
          onPress={() => {
            if (touchedCountersArray.includes(num)) {
              removeFromArray(num);
            } else {
              addToArray(num);
            }
          }}
        >
          <View
            //@ts-ignore
            style={
              touchedCountersArray.includes(num) ? [globalStyles.counter] : ""
            }
          ></View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TouchTable;

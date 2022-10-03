import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { arrayMaker } from "../../helpers/arrayMaker";
import touchTableStyles from "./TouchTable.styles";

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
    <View style={touchTableStyles.container}>
      {arrayMaker(lengthOfFrame).map((num) => (
        <TouchableOpacity
          style={touchTableStyles.cell}
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
              touchedCountersArray.includes(num)
                ? [touchTableStyles.counter]
                : ""
            }
          ></View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TouchTable;

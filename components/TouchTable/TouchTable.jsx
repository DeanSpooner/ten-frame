import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import touchTableStyles from "./TouchTable.styles";

const TouchTable = ({ countersTouched, setCountersTouched }) => {
  const [touchedCountersArray, setTouchedCountersArray] = useState([]);

  const lengthOfFrame = 10;
  const arrayOfCounters = Array.from(Array(lengthOfFrame)).map((e, i) => i + 1);

  const addToArray = (num) => {
    setTouchedCountersArray([...touchedCountersArray, num]);
    setCountersTouched(countersTouched + 1);
  };

  const removeFromArray = (num) => {
    setTouchedCountersArray((item) =>
      item.filter((element) => {
        return element !== num;
      })
    );
    setCountersTouched(countersTouched - 1);
  };

  return (
    <View style={touchTableStyles.container}>
      {arrayOfCounters.map((num) => (
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

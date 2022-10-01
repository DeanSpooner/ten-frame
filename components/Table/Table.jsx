import { useEffect, useState } from "react";
import { View } from "react-native";
import tableStyles from "./Table.styles";

export default Table = ({ counter }) => {
  const [randomColour, setRandomColour] = useState("red");
  const lengthOfFrame = 10;
  const arrayOfCounters = Array.from(Array(lengthOfFrame)).map((e, i) => i + 1);

  useEffect(() => {
    const generatedColour = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    setRandomColour(`#${generatedColour}`);
  }, [counter]);

  return (
    <View style={tableStyles.container}>
      {arrayOfCounters.map((num) => (
        <View style={tableStyles.cell} key={num}>
          <View
            style={
              counter < num
                ? ""
                : [tableStyles.counter, { backgroundColor: randomColour }]
            }
          ></View>
        </View>
      ))}
    </View>
  );
};

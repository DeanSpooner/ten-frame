import React, { useEffect, useState } from "react";
import { View } from "react-native";
import tableStyles from "./Table.styles";

interface TableProps {
  counter: number;
}

const Table: React.FC<TableProps> = ({ counter }) => {
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
            //@ts-ignore
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

export default Table;

import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { randomColourGenerator } from "../../helpers/randomColourGenerator";
import { arrayMaker } from "../../helpers/arrayMaker";
import tableStyles from "./Table.styles";

interface TableProps {
  counter: number;
}

const Table: React.FC<TableProps> = ({ counter }) => {
  const [randomColour, setRandomColour] = useState<string>("red");
  const lengthOfFrame: number = 10;

  useEffect(() => {
    setRandomColour(`#${randomColourGenerator()}`);
  }, [counter]);

  return (
    <View style={tableStyles.container}>
      {arrayMaker(lengthOfFrame).map((num) => (
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

import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { randomColourGenerator } from "../../helpers/randomColourGenerator";
import { arrayMaker } from "../../helpers/arrayMaker";
import globalStyles from "../../../Global.styles";

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
    <View style={globalStyles.tenFrameContainer}>
      {arrayMaker(lengthOfFrame).map((num) => (
        <View style={globalStyles.cell} key={num}>
          <View
            //@ts-ignore
            style={
              counter < num
                ? ""
                : [globalStyles.counter, { backgroundColor: randomColour }]
            }
          ></View>
        </View>
      ))}
    </View>
  );
};

export default Table;

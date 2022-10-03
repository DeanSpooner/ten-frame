import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { randomColourGenerator } from "../../helpers/randomColourGenerator";
import { arrayMaker } from "../../helpers/arrayMaker";
import gameTableStyles from "./GameTable.styles";

interface GameTableProps {
  counter: number;
}

const GameTable: React.FC<GameTableProps> = ({ counter }) => {
  const [randomColour, setRandomColour] = useState<string>("red");
  const lengthOfFrame: number = 10;

  useEffect(() => {
    setRandomColour(`#${randomColourGenerator()}`);
  }, [counter]);

  return (
    <View style={gameTableStyles.container}>
      {arrayMaker(lengthOfFrame).map((num) => (
        <View style={gameTableStyles.cell} key={num}>
          <View
            //@ts-ignore
            style={
              counter < num
                ? ""
                : [gameTableStyles.counter, { backgroundColor: randomColour }]
            }
          ></View>
        </View>
      ))}
    </View>
  );
};

export default GameTable;

import React, { useEffect, useState } from "react";
import { View } from "react-native";
import gameTableStyles from "./GameTable.styles";

interface GameTableProps {
  counter: number;
}

const GameTable: React.FC<GameTableProps> = ({ counter }) => {
  const [randomColour, setRandomColour] = useState<string>("red");
  const lengthOfFrame: number = 10;
  const arrayOfCounters: number[] = Array.from(Array(lengthOfFrame)).map(
    (e, i) => i + 1
  );

  useEffect(() => {}, []);

  useEffect(() => {
    const generatedColour: string = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    setRandomColour(`#${generatedColour}`);
  }, [counter]);

  return (
    <View style={gameTableStyles.container}>
      {arrayOfCounters.map((num) => (
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

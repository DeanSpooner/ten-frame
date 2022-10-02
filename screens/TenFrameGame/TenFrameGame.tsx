import { transform } from "@babel/core";
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Table from "../../components/Table/Table";
import tenFrameGameStyles from "./TenFrameGame.styles";

const TenFrameGame: React.FC<{}> = () => {
  const [counters, setCounters] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);
  const [wrongAnswer, setWrongAnswer] = useState<boolean>(false);

  const lengthOfFrame: number = 10;
  const arrayOfButtons: number[] = Array.from(Array(lengthOfFrame)).map(
    (e, i) => i + 1
  );

  const randomCounters = () => {
    setCounters(Math.floor(Math.random() * 10 + 1));
  };

  const handleAnswer = (num: number) => {
    if (num === counters) {
      setScore(score + 1);
      setTotal(total + 1);
      randomCounters();
      setWrongAnswer(false);
      setCorrectAnswer(true);
      setTimeout(() => {
        setCorrectAnswer(false);
      }, 1000);
    } else {
      setTotal(total + 1);
      setCorrectAnswer(false);
      setWrongAnswer(true);
      setTimeout(() => {
        setWrongAnswer(false);
      }, 1000);
    }
  };

  useEffect(() => {
    randomCounters();
  }, []);

  return (
    <>
      <Text style={tenFrameGameStyles.score}>
        Score: {score} out of {total}
      </Text>
      <Text style={tenFrameGameStyles.text}>How many counters are there?</Text>
      <Table counter={counters} />
      <View style={tenFrameGameStyles.buttonsContainer}>
        {arrayOfButtons.map((num) => (
          <TouchableOpacity
            key={num}
            onPress={() => {
              handleAnswer(num);
            }}
            style={tenFrameGameStyles.container}
          >
            <Text style={tenFrameGameStyles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {correctAnswer && (
        <Text style={[tenFrameGameStyles.answerMessage, { color: "#009" }]}>
          Correct!
        </Text>
      )}
      {wrongAnswer && (
        <Text style={[tenFrameGameStyles.answerMessage, { color: "#900" }]}>
          Try again!
        </Text>
      )}
    </>
  );
};

export default TenFrameGame;

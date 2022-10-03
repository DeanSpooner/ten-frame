import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Table from "../../components/Table/Table";
import { arrayMaker } from "../../helpers/arrayMaker";
import tenFrameGameStyles from "./TenFrameGame.styles";

const TenFrameGame: React.FC<{}> = () => {
  const [counters, setCounters] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [time, setTime] = useState<number>(60);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);
  const [wrongAnswer, setWrongAnswer] = useState<boolean>(false);

  const lengthOfFrame: number = 10;

  const randomCounters = (): void => {
    setCounters(Math.floor(Math.random() * 10 + 1));
  };

  const handleAnswer = (num: number): void => {
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

  useEffect(() => {
    if (gameStarted && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
    return;
  }, [gameStarted, time]);

  return (
    <>
      {!gameStarted && time !== 0 && (
        <TouchableOpacity
          onPress={() => setGameStarted(true)}
          style={tenFrameGameStyles.startButtonContainer}
        >
          <Text style={tenFrameGameStyles.startResetButton}>Start game!</Text>
        </TouchableOpacity>
      )}
      {gameStarted && time === 0 && (
        <>
          <Text style={tenFrameGameStyles.text}>Great try! You scored </Text>
          <Text style={tenFrameGameStyles.score}>
            {score} out of {total}!
          </Text>
          <TouchableOpacity
            onPress={() => {
              setGameStarted(true);
              setTime(60);
            }}
            style={tenFrameGameStyles.resetButtonContainer}
          >
            <Text style={tenFrameGameStyles.startResetButton}>Try again!</Text>
          </TouchableOpacity>
        </>
      )}
      {gameStarted && time > 0 && (
        <>
          <View style={tenFrameGameStyles.timeContainer}>
            <Text style={tenFrameGameStyles.time}>{time}</Text>
          </View>
          <Text style={tenFrameGameStyles.score}>
            Score: {score} out of {total}
          </Text>
          <Text style={tenFrameGameStyles.text}>
            How many counters are there?
          </Text>
          <Table counter={counters} />
          <View style={tenFrameGameStyles.buttonsContainer}>
            {arrayMaker(lengthOfFrame).map((num) => (
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
      )}
    </>
  );
};

export default TenFrameGame;

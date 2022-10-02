import React, { useState } from "react";
import { Text } from "react-native";
import TouchTable from "../../components/TouchTable/TouchTable";
import tenFrameTouchStyles from "./TenFrameTouch.styles";

const TenFrameTouch: React.FC<{}> = () => {
  const [countersTouched, setCountersTouched] = useState<number>(0);

  return (
    <>
      <Text style={tenFrameTouchStyles.text}>
        Touch the ten frame to add counters to it.
      </Text>
      <TouchTable
        countersTouched={countersTouched}
        setCountersTouched={setCountersTouched}
      />
      <Text style={tenFrameTouchStyles.amount}>{countersTouched}</Text>
    </>
  );
};

export default TenFrameTouch;

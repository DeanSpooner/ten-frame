import React, { useState } from "react";
import { Text, View } from "react-native";
import globalStyles from "../../../Global.styles";
import TouchTable from "../../components/TouchTable/TouchTable";
import tenFrameTouchStyles from "./TenFrameTouch.styles";

const TenFrameTouch: React.FC<{}> = () => {
  const [countersTouched, setCountersTouched] = useState<number>(0);

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.text}>
        Touch the ten frame to add counters to it.
      </Text>
      <TouchTable
        countersTouched={countersTouched}
        setCountersTouched={setCountersTouched}
      />
      <Text style={tenFrameTouchStyles.amount}>{countersTouched}</Text>
    </View>
  );
};

export default TenFrameTouch;

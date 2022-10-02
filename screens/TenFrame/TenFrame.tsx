import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import Table from "../../components/Table/Table";
import tenFrameStyles from "./TenFrame.styles";

const TenFrame: React.FC<{}> = () => {
  const [counters, setCounters] = useState<number>(0);

  //@ts-ignore
  const onChangeAmount = (newAmount) => {
    if (
      newAmount > 10 ||
      newAmount.charCodeAt(0) < 48 ||
      newAmount.charCodeAt(0) > 57 ||
      newAmount.charCodeAt(1) < 48 ||
      newAmount.charCodeAt(1) > 57
    ) {
      return;
    }
    setCounters(newAmount);
  };

  return (
    <>
      <Text style={tenFrameStyles.text}>How many counters will you place?</Text>
      <View style={tenFrameStyles.inputContainer}>
        <TextInput
          style={tenFrameStyles.textInput}
          onChangeText={(newAmount) => onChangeAmount(newAmount)}
          returnKeyType="done"
          keyboardType="number-pad"
          //@ts-ignore
          value={counters}
          maxLength={2}
          contextMenuHidden={true}
        ></TextInput>
      </View>
      <Table counter={counters} />
    </>
  );
};

export default TenFrame;

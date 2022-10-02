import { useState } from "react";
import { Text, View, TextInput } from "react-native";
import Table from "../../components/Table/Table";
import tenFrameStyles from "./TenFrame.styles";

const TenFrame = () => {
  const [counters, setCounters] = useState(0);

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
      <Text style={tenFrameStyles.title}>Ten Frame</Text>
      <Text style={tenFrameStyles.text}>
        How many counters would you like to place?
      </Text>
      <View style={tenFrameStyles.inputContainer}>
        <TextInput
          style={tenFrameStyles.textInput}
          onChangeText={(newAmount) => onChangeAmount(newAmount)}
          returnKeyType="done"
          keyboardType="number-pad"
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

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import appStyles from "./App.styles";
import Table from "./components/Table/Table";

export default function App() {
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
    <LinearGradient colors={["#045d1a", "#11ac56"]} style={appStyles.container}>
      <Text style={appStyles.title}>Ten Frame</Text>
      <Text style={appStyles.text}>
        How many counters would you like to place?
      </Text>
      <View style={appStyles.inputContainer}>
        <TextInput
          style={appStyles.textInput}
          onChangeText={(newAmount) => onChangeAmount(newAmount)}
          returnKeyType="done"
          keyboardType="number-pad"
          value={counters}
          maxLength={2}
          contextMenuHidden={true}
        ></TextInput>
      </View>
      <Table counter={counters} />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

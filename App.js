import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, TextInput } from "react-native";
import appStyles from "./App.styles";
import Table from "./components/Table/Table";

export default function App() {
  const [counters, setCounters] = useState(0);

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Ten Frame</Text>
      <Text style={appStyles.text}>
        How many counters would you like to place?
      </Text>
      <View style={appStyles.inputContainer}>
        <TextInput
          styles={appStyles.textInput}
          onChangeText={setCounters}
          returnKeyType="done"
          keyboardType="number-pad"
        ></TextInput>
      </View>
      <Table counter={counters} />
      <StatusBar style="auto" />
    </View>
  );
}

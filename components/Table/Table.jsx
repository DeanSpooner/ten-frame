import { View } from "react-native";
import tableStyles from "./Table.styles";

export default Table = ({ counter }) => {
  const lengthOfFrame = 10;
  const myArray = Array.from(Array(lengthOfFrame)).map((e, i) => i + 1);
  return (
    <View style={tableStyles.container}>
      {myArray.map((num) => (
        <View style={tableStyles.cell} key={num}>
          <View style={counter < num ? "" : tableStyles.counter}></View>
        </View>
      ))}
    </View>
  );
};

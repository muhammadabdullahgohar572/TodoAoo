import { StyleSheet, View } from "react-native";

import Todo from "./Todo/Todo";
import Randing from "./Todo/Randing";
import New from "./Todo/New";

export default function App() {
  return (
    <View style={{ flexDirection: "column", margin: 20 }}>
      {/* <Todo /> */}
      {/* <Randing/> */}
      <New/>
    </View>
  );
}

const styles = StyleSheet.create({});

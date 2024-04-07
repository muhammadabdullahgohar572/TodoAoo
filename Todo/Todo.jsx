import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";

const Todo = () => {
  const [addTodo, setaddTodo] = useState("");
  const [add, setTodo] = useState([]);
  const Add = (Text) => {
    setaddTodo(Text);
    alert(Text);
  };
  const click = () => {
    setTodo([...add, addTodo]);
    alert(add);
  };
  return (
    <>
      <View style={{ justifyContent: "center" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <TextInput
              onChangeText={Add}
              placeholder="Enter an Item"
              style={{ padding: 10, borderColor: "black", borderWidth: 2 }}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Button onPress={click} title="Add Todo" />
          </View>
        </View>
        <View>
          {/* Render the list of todo items */}
          {add.map((Item, index) => (
            <Text key={index}>{Item}</Text>
          ))}
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  font: {
    fontWeight: "600",
    fontSize: 20,
  },
});
export default Todo;











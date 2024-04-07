import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  View,
  ViewBase,
  Text,
  Pressable,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
const New = () => {
  const [value, setvalue] = useState("");
  const [Todo, SetTodo] = useState([]);
  const Input = (Text) => {
    setvalue(Text);
    console.log(Text);
  };

  const click = () => {
    if (value !== "") {
      SetTodo([...Todo, { text: value, id: Math.random().toString() }]);
      setvalue("");
    } else {
      alert("Please Fill Data");
    }
  };

  const Delete = (id) => {
    SetTodo(Todo.filter((item) => item.id !== id));
  };
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginTop: 50,
          justifyContent: "space-around",
        }}
      >
        <View style={{}}>
          <TextInput
            onChangeText={Input}
            value={value}
            placeholder="Enter a Todo list"
            style={{ borderColor: "black", borderWidth: 2, padding: 10 }}
          />
        </View>
        <View style={{ marginLeft: 5 }}>
          <Button title="Add List" onPress={click} color={"black"} />
        </View>
      </View>
      <FlatList
        data={Todo}
        renderItem={(addTodoo) => {
          return (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={{ width: 320 }}>
                  <Text
                    style={{
                      borderColor: "black",
                      borderBottomWidth: 2,
                      padding: 0,
                      backgroundColor: "#2916F5",
                      color: "#F0FFFF",
                      fontSize: 20,
                      fontWeight: "400",
                      marginTop: 20,
                      borderRadius: 200,
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    {addTodoo.item.text}
                  </Text>
                </View>
                {/* <AntDesign name="edit" size={24} color="black" /> */}
                <Pressable onPress={() => Delete(addTodoo.item.id)}>
                  <View style={{ marginTop: 20 }}>
                    <AntDesign name="delete" size={24} color="red" />
                  </View>
                </Pressable>
              </View>
            </>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default New;

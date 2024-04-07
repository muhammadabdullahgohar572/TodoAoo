import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import TodoItem from "../components/Todolidt";
import Todoinput from "../components/Todoinput";

const Falteiconpr = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleTodoAdd = () => {
    if (value !== "") {
      setTodo([...todo, { text: value, id: Math.random().toString() }]);
      setValue("");
      // alert("ok")
    } else {
      alert("Please fill in the input");
    }
  };

  const Delete = (id) => {
    console.log("okkk");
    setTodo(todo.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <>
      <Todoinput
        value={value}
        onChangeText={setValue}
        onPress={handleTodoAdd}
      />
      <FlatList
        style={{ marginTop: 0, height: "30%" }}
        data={todo}
        renderItem={({ item }) => {
          return <TodoItem item={item.text} id={item.id} onDelete={Delete} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Falteiconpr;

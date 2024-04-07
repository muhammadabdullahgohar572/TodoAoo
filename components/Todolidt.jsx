import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

const TodoItem = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <Pressable onPress={handleDelete}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.item}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    marginTop: 20,
    borderWidth: 1,
    alignItems: "center",
    padding: 5,
    backgroundColor: "#AA0000",
    borderRadius: 300,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
    color: "#66FF00",
  },
});

export default TodoItem;

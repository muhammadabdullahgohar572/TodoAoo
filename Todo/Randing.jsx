import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  FlatList,
  Pressable,
} from "react-native";

const Randing = () => {
  const [addTodo, setaddTodo] = useState("");
  const [add, setTodo] = useState([]);
  const Add = (Text) => {
    setaddTodo(Text);
    console.log(Text);
  };
  const click = () => {
    if (addTodo !== "") {
      setTodo([...add, { text: addTodo, id: Math.random().toString() }]);
      setaddTodo("");
    } else {
      alert("Please fill in the data");
    }
  };

  const Delete = (id) => {
    setTodo(add.filter((item) => item.id !== id));
  };
  return (
    <>
      <View style={{ justifyContent: "center" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <TextInput
              keyboardType="numeric"
              onChangeText={Add}
              value={addTodo}
              placeholder="Enter an Item"
              style={{ padding: 10, borderColor: "black", borderWidth: 2 }}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Button onPress={click} title="Add Todo" />
          </View>
        </View>
        <View>
          <FlatList
            data={add}
            renderItem={(addTodoo) => {
              return (
                <>
             
                  <Pressable onPress={() => Delete(addTodoo.item.id)}>
                    <Text
                      // key={index}
                      style={{
                        borderColor: "black",
                        borderBottomWidth: 2,
                        padding: 2,
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
                  </Pressable>
                </>
              );
            }}
            keyExtractor={(item) => item.id}
          />
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
export default Randing;
// ⭐ Adobe_Premiere_Pro

// 🔗 download :

// https://drive.google.com/file/d/1JCWG4D-Y41ytcUSFuEsEuIqG6EyDk8fC/view?usp=sharing

// —-------------------

// ⭐ Adobe Photoshop

// 🔗 download :

// https://drive.google.com/file/d/1vrBOGEtzL_AI83mRW3BZCKQE-e74a8-K/view?usp=sharing

// —-------------------

// ⭐ Adobe Lightroom Classic

// 🔗 download :

// https://drive.google.com/file/d/1AgsgJyjNZa0UsN3V1b48ZjRHy7hFSqf8/view?usp=sharing

// —-------------------

// ⭐ Adobe Illustrator

// 🔗 download :

// https://drive.google.com/file/d/1b0Lwy5qYgx82QpWyK4SEa0-FfHlP1Sp_/view?usp=sharing

// —-------------------

// ⭐ MSOffice

// 🔗 download :

// https://drive.google.com/file/d/1Nnfvm4P0ukbUjaeT-Z_R1F1Zlop_W2Z3/view?usp=sharing










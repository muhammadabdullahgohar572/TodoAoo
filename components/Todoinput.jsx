import React from "react";
import { View, TextInput, Button } from "react-native";

const Todoinput = (props) => {
  return (
    <View
      style={{
        margin: 40,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ borderRadius: 0 }}>
        <TextInput
          placeholder="Enter a Name"
          onChangeText={props.onChangeText}
          value={props.value}
          style={{
            padding: 5,
            borderWidth: 2,
            borderColor: "black",
            width: 150,
            color: "black",
            fontWeight: "600",
            fontSize: 20,
          }}
        />
      </View>

      <View style={{ color: "", padding: 0, marginLeft: 30 }}>
        <Button
          title="Click Me"
          color="red"
          touchSoundDisabled
          onPress={props.onPress}
        />
      </View>
    </View>
  );
};

export default Todoinput;

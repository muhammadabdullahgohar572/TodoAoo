import { View } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, StyleSheet, TextInput } from "react-native";
export const Search = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Enter a City" />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="search-circle-sharp" size={24} color="black" />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 8,
    // width:Dimensions.get('screen').width *10
    width: 200,
  },
  iconContainer: {
    marginLeft: 5,
  },
});

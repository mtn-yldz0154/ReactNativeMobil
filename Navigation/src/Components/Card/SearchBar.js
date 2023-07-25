import react from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./SearchBar.style";

const SearchBar = (props) => {
  return (
    <View>
      <TextInput
        placeholder="Ara ...."
        style={styles.input}
        onChangeText={props.search}
      ></TextInput>
    </View>
  );
};

export default SearchBar;

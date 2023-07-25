import React from "react";
import { TextInput, Text, View } from "react-native";
import styles from "./Input.style";

const Input = ({ label, placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_conteiner}>
        <TextInput
          placeholderTextColor={"black"}
          placeholder={placeholder}
          onChangeText={onChangeText}
        ></TextInput>
      </View>
    </View>
  );
};

export default Input;

import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";
import Button from "../Components/Button/Button";
const Welcome = ({ navigation }) => {
  const image = {
    uri: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/jbl/thumb/139395-1_large.jpg",
  };
  const Register = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>TeknoFest</Text>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{ marginTop: 450 }}>
          <Button style={styles.buton} text="Giriş" onPress={Register}></Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
    color: "rgb(151,140,184)",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "92%",
  },
});

import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
const Register = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const image = {
    uri: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/jbl/thumb/139395-1_large.jpg",
  };

  const handleSubmit = () => {
    if (!name || !surname || !username || !email || !password) {
      Alert.alert("Fitness Center", "Bilgiler Boş Bırakılamaz!");
    }
    const user = {
      name,
      surname,
      username,
      email,
      password,
    };
    navigation.navigate("CardAppScreen", { user });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Kayıt Ol</Text>
        <View>
          <Input
            label="Adınız:"
            placeholder="Adınızı Giriniz ..."
            onChangeText={setName}
          ></Input>
          <Input
            label="Soyadınız:"
            placeholder="Soyadınızı Giriniz ..."
            onChangeText={setSurname}
          ></Input>
          <Input
            label="Kullanıcı Adınız:"
            placeholder="Kullanıcı Adınızı Giriniz ..."
            onChangeText={setUsername}
          ></Input>
          <Input
            label="Mailiniz:"
            placeholder="Mail Adresini Giriniz ..."
            onChangeText={setEmail}
          ></Input>
          <Input
            label="Şifreniz:"
            placeholder="Şifrenizi Giriniz ..."
            onChangeText={setPassword}
          ></Input>
          <Button text="Kayıt Ol" onPress={handleSubmit}></Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    opacity: 0.69,
    height: "90%",
    marginTop: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 50,
    color: "rgb(151,140,184)",
  },
});

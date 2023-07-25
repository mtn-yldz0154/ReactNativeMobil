import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo } from "react-native-vector-icons";
function Result({ route, navigation }) {
  const Home = () => {
    navigation.navigate("WelcomeScreen");
  };

  const { user } = route.params;
  const UserB = () => {
    navigation.navigate("ResultScreen", { user });
  };
  const image = {
    uri: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/jbl/thumb/139395-1_large.jpg",
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Kullanıcı Bilgileri</Text>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>
            Adınız:<Text style={styles.text2}>{user.name}</Text>{" "}
          </Text>
          <Text style={styles.text}>
            Soyadız:<Text style={styles.text2}>{user.surname}</Text>{" "}
          </Text>
          <Text style={styles.text}>
            Kullanıcı Adınız:<Text style={styles.text2}>{user.username}</Text>{" "}
          </Text>
          <Text style={styles.text}>
            {" "}
            Emailiniz:<Text style={styles.text2}>{user.email}</Text>{" "}
          </Text>
          <Text style={styles.text}>
            {" "}
            Şifreniz:<Text style={styles.text2}>{user.password}</Text>{" "}
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.container_footer}>
        <TouchableOpacity onPress={Home}>
          <Entypo style={styles.home} name="home"></Entypo>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Result;

const styles = StyleSheet.create({
  image: {
    opacity: 0.8,
    height: "100%",
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 15,
    marginTop: 30,
    color: "purple",
    marginRight: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "purple",
    margin: 20,
  },
  container: {
    height: "90%",
    backgroundColor: "white",
  },
  container_footer: {
    height: "10%",
    backgroundColor: "rgb(149,140,184)",
    alignItems: "center",
  },
  text2: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  home: {
    marginTop: 10,
    fontSize: 50,
    marginLeft: 30,
    color: "white",
  },
});

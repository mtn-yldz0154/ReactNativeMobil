import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Data from "../../patika.json";
import Card from "../Components/Card/Card";
import SearchBar from "../Components/Card/SearchBar";
import { useState } from "react";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  AntDesign,
  Entypo,
} from "react-native-vector-icons";

export default function CardApp({ route, navigation }) {
  const Home = () => {
    navigation.navigate("WelcomeScreen");
  };

  const { user } = route.params;
  const UserB = () => {
    navigation.navigate("ResultScreen", { user });
  };
  const [searchList, setSearchList] = useState(Data);
  const handle = (text) => {
    const Filterlist = Data.filter((data) => {
      const searchTest = text.toLowerCase();
      const currentTest = data.title.toLowerCase();
      return currentTest.includes(searchTest);
    });
    setSearchList(Filterlist);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.div}>
          <Text style={styles.p}>TEKNOFEST</Text>
          <AntDesign style={styles.icon} name="user">
            <Text style={styles.name}>{user.username}</Text>
          </AntDesign>
        </View>
        <FlatList
          ListHeaderComponent={
            <View>
              <SearchBar search={handle} />
            </View>
          }
          numColumns={2}
          key={2}
          data={searchList}
          renderItem={({ item }) => <Card props={item}></Card>}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.container2}>
          <TouchableOpacity onPress={Home}>
            <Entypo style={styles.home} name="home"></Entypo>
          </TouchableOpacity>
          <TouchableOpacity onPress={UserB}>
            <AntDesign style={styles.user} name="user"></AntDesign>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "90%",
  },
  p: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 40,
    color: "purple",
    fontWeight: "bold",
  },
  input: {
    marginTop: 15,
    marginLeft: 15,
    height: 55,
    backgroundColor: "rgb(236,239,241)",
  },
  name: {
    marginTop: 50,
    fontSize: 20,
    color: "purple",
    fontWeight: "bold",
    textAlign: "right",
    marginLeft: 80,
  },
  div: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  icon: {
    fontSize: 23,
    fontWeight: "bold",
    color: "purple",
    marginLeft: 50,
    marginBottom: 13,
  },
  footer: {
    backgroundColor: "rgb(149,140,184)",
    width: "100%",
    height: "10%",
  },
  container2: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  home: {
    marginTop: 10,
    fontSize: 50,
    marginLeft: 30,
    color: "white",
  },
  user: {
    marginTop: 10,
    marginRight: 30,
    fontSize: 50,
    textAlign: "right",
    color: "white",
  },
});

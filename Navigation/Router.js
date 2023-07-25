import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/Pages/Welcome";
import Register from "./src/Pages/Register";
import Result from "./src/Pages/Result";
import CardApp from "./src/Pages/CardApp";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={Welcome}></Stack.Screen>
        <Stack.Screen name="RegisterScreen" component={Register}></Stack.Screen>
        <Stack.Screen name="CardAppScreen" component={CardApp}></Stack.Screen>
        <Stack.Screen name="ResultScreen" component={Result}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

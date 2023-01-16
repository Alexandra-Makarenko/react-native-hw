import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import Home from "./Screens/Home";
import PostsScreen from "./Screens/PostsScreen";

const MainStack = createStackNavigator(); // указывает на группу навигаторов

export default () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home screen",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Press me"
                color="#fff"
              />
            ),
          }}
        />
        <MainStack.Screen name="PostsScreen" component={PostsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
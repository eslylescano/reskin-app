import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Models from "../screens/Models";

const Stack = createStackNavigator();

export default function ModelsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"models"}
        component={Models}
        options={{ title: "Models" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

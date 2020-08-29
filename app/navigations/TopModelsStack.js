import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopModels from "../screens/TopModels";

const Stack = createStackNavigator();

export default function TopModelsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"TopModels"}
        component={TopModels}
        options={{ title: "TopModels" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

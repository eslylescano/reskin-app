import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Account"}
        component={Account}
        options={{ title: "Account" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

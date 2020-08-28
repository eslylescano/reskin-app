import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Models from "../screens/Models";
import Favorites from "../screens/Favorites";
import TopModels from '../screens/TopModels';
import Account from '../screens/Account';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="models"
          component={Models}
          options={{ title: "Models" }}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{ title: "Favorites" }}
        />
        <Tab.Screen
          name="top-models"
          component={TopModels}
          options={{ title: "Top 5" }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{ title: "Search" }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{ title: "Account" }}
        />

        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

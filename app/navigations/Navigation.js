import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ModelsStack from './ModelsStack';
import FavoritesStack from './FavoritesStack';
import TopModelsStack from './TopModelsStack';
import SearchStack from './SearchStack';
import AccountStack from './AccoutStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="models"
          component={ModelsStack}
          options={{ title: "Models" }}
        />
        <Tab.Screen
          name="favoritesStaFavoritesStack"
          component={FavoritesStack}
          options={{ title: "FavoritesStack" }}
        />
        <Tab.Screen
          name="top-models"
          component={TopModelsStack}
          options={{ title: "Top 5" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Search" }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Account" }}
        />

        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

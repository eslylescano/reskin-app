import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
    return (
        <ScrollView>
        <Image
          source={require("../../../assets/img/user-guest.png")}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.viewContainer}>
          <CreateAccount />
        </View>
        <Divider style={styles.divider} />
        <Text>Social Login</Text>
      </ScrollView>
    )
}

function CreateAccount() {
    const navigation = useNavigation();
  
    return (
      <Text style={styles.textRegister}>
        Do not you have an account yet?{" "}
        <Text
          style={styles.btnRegister}
          onPress={() => navigation.navigate("register")}
        >
          Register
        </Text>
      </Text>
    );
  }

const styles = StyleSheet.create({
    logo: {
      width: "100%",
      height: 150,
      marginTop: 20,
    },
    viewContainer: {
      marginRight: 40,
      marginLeft: 40,
    },
    textRegister: {
      marginTop: 15,
      marginLeft: 10,
      marginRight: 10,
    },
    btnRegister: {
      color: "#00a680",
      fontWeight: "bold",
    },
    divider: {
      backgroundColor: "#00a680",
      margin: 40,
    },
  });
  

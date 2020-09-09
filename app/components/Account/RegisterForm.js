import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'


export default function RegisterForm() {
    return (
        <View style={styles.fromContainer}>
            <Input
            placeholder="Email"
            containerStyle={styles.inputForm}
            />
            <Input
            placeholder="Password"
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={true}
            />
            <Input
            placeholder="Repeat Password"
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={true}
            />
            <Button
            title="Join"
            containerStyle={styles.containerRegister}
            buttonStyle={styles.btnRegister}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fromContainer:{
        marginTop:30
    },
    inputForm:{
     width:"100%",
     marginTop:20   
    },
    containerRegister:{
        marginTop:20,
        width:"95%"
    },
    btnRegister:{
     backgroundColor:"#00a680"   
    }
})

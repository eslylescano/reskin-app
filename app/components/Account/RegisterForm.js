import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'


export default function RegisterForm() {
    return (
        <View style={styles.fromContainer}>
            <Input
            placeholder="Email"
            containerStyle={styles.inputForm}
            rightIcon={
                <Icon
                type="material-community"
                name="at"
                iconStyle={styles.iconRight}
                />
            }
            />
            <Input
            placeholder="Password"
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={true}
            rightIcon={
                <Icon
                type="material-community"
                name="eye-outline"
                iconStyle={styles.iconRight}
                />
            }
            />
            <Input
            placeholder="Repeat Password"
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={true}
            rightIcon={
                <Icon
                type="material-community"
                name="eye-outline"
                iconStyle={styles.iconRight}
                />
            }
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
    },
    iconRight:{
       color:"#c1c1c1" 
    }
})

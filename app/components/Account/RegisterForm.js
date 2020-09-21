import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());

  const onSubmit = () => {
    console.log(formData);
  };

  const onChange=(e,type)=>{
    setFormData({...formData,[type]:e.nativeEvent.text});
  }
  return (
    <View style={styles.fromContainer}>
      <Input
        placeholder="Email"
        containerStyle={styles.inputForm}
        onChange={e=>onChange(e,"email")}
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
        secureTextEntry={!showPassword}
        onChange={e=>onChange(e,"password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="Repeat Password"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={!showRepeatPassword}
        onChange={e=>onChange(e,"repeatPassword")}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowRepeatPassword(!showRepeatPassword)}
          />
        }
      />
      <Button
        title="Join"
        containerStyle={styles.containerRegister}
        buttonStyle={styles.btnRegister}
        onPress={ onSubmit}
      />
    </View>
  );
}

const defaultFormValue = () => {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
};

const styles = StyleSheet.create({
  fromContainer: {
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  containerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});

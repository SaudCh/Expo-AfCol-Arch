import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from '../Const/color';

export default function Signup() {
  const [isLoading, setLoading] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation()

  // useFocusEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((user) => {
  //         if (user) {
  //             nav.replace("Drawer")
  //         }
  //     })

  //     return unsubscribe
  // })

  const signin = () => {
    //console.log(email, password)
    //setLoading(true)

  }


  return (
    <View style={{ ...styles.body }}>
      <View style={{ ...styles.box }}>
        <Text style={{ ...styles.title }}>Signup</Text>
        <TextInput
          mode="outlined"
          label="First Name"
          style={{ height: 40, marginTop: 10 }}
          placeholder="First Name"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          mode="outlined"
          label="Last Name"
          style={{ height: 40, marginTop: 10 }}
          placeholder="Last Name"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          mode="outlined"
          label="Email"
          style={{ height: 40, marginTop: 10 }}
          placeholder="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />

        <TextInput
          mode="outlined"
          style={{ height: 40, marginTop: 10, marginBottom: 10 }}
          label="password"
          placeholder="Password"
          value={password}
          onChangeText={pass => setPassword(pass)}
          secureTextEntry
        />

        <TextInput
          mode="outlined"
          style={{ height: 40, marginTop: 10, marginBottom: 10 }}
          label="password"
          placeholder="Password"
          value={password}
          onChangeText={pass => setPassword(pass)}
          secureTextEntry
        />
        <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
          <Text style={{ ...styles.forgetPass }}>
            Forget Password?
          </Text>
        </TouchableOpacity>
        <View>

          {isLoading ? (

            <View style={{ ...styles.activityContainer }}>
              <ActivityIndicator size="large" color="red" />
            </View>

          ) : (
            <Button style={{ ...styles.loginButton }} onPress={() => signin()}>
              <Text style={{ ...styles.loginText }}>Login</Text>
            </Button>
          )}

          <Button onPress={() => navigation.navigate('Signup')}>
            <Text style={{ ...styles.signupText }}>Create an Account</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: COLORS.lPink
  },
  box: {

    borderRadius: 10,
    backgroundColor: COLORS.white,
    padding: 20,
    width: 300,

    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: COLORS.dPink
  },
  forgetPass: {
    textAlign: 'right'
  },
  loginButton: {
    backgroundColor: COLORS.dPink,
    width: 100,
    alignSelf: 'center',
    marginVertical: 10
  },
  loginText: {
    color: COLORS.white
  },
  signupText: {
    color: COLORS.yellow
  },
});

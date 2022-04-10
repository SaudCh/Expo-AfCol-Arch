import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { signupValidation } from "./signupValidation";


import { COLORS } from '../Const/color';

export default function Signup() {
  const [isLoading, setLoading] = useState(false)

  const [fName, setfName] = useState("")
  const [lName, setlName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setcPassword] = useState("")
  const [errors, setErrors] = useState("")

  const navigation = useNavigation()

  // useFocusEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((user) => {
  //         if (user) {
  //             nav.replace("Drawer")
  //         }
  //     })

  //     return unsubscribe
  // })

  const signup = () => {
    setErrors("")
    const data = {
      email,
      password,
      fName,
      lName,
      cPassword
    }

    const errors = signupValidation(data);
    //console.log(errors)

    if (Object.keys(errors).length !== 0) {
      setErrors(errors)
      return
    }

    console.log(data)
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
          value={fName}
          onChangeText={fname => setfName(fname)}
        />
        {errors.fName && <Text style={{ ...styles.errors }}>{errors.fName}</Text>}
        <TextInput
          mode="outlined"
          label="Last Name"
          style={{ height: 40, marginTop: 10 }}
          placeholder="Last Name"
          value={lName}
          onChangeText={lname => setlName(lname)}
        />
        {errors.lName && <Text style={{ ...styles.errors }}>{errors.lName}</Text>}

        <TextInput
          mode="outlined"
          label="Email"
          style={{ height: 40, marginTop: 10 }}
          placeholder="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        {errors.email && <Text style={{ ...styles.errors }}>{errors.email}</Text>}


        <TextInput
          mode="outlined"
          style={{ height: 40, marginTop: 10, marginBottom: 10 }}
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={pass => setPassword(pass)}
          secureTextEntry
        />
        {errors.password && <Text style={{ ...styles.errors }}>{errors.password}</Text>}


        <TextInput
          mode="outlined"
          style={{ height: 40, marginTop: 10, marginBottom: 10 }}
          label="Confirm Password"
          placeholder="Confirm Password"
          value={cPassword}
          onChangeText={cpass => setcPassword(cpass)}
          secureTextEntry
        />
        <View>
          {errors.cPassword && <Text style={{ ...styles.errors }}>{errors.cPassword}</Text>}


          {isLoading ? (

            <View style={{ ...styles.activityContainer }}>
              <ActivityIndicator size="large" color="red" />
            </View>

          ) : (
            <Button style={{ ...styles.createButton }} onPress={() => signup()}>
              <Text style={{ ...styles.createText }}>Create</Text>
            </Button>

          )}
          <Button onPress={() => navigation.navigate('Login')}>
            <Text style={{ ...styles.loginText }}>Already have an account</Text>
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
  createButton: {
    backgroundColor: COLORS.dPink,
    width: 100,
    alignSelf: 'center',
    marginVertical: 10
  },
  createText: {
    color: COLORS.white
  },
  loginText: {
    color: COLORS.yellow
  },
  errors: {
    color: 'red'
  }
});

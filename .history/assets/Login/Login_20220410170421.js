import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from '../Const/color';

export default function Login() {
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
    setLoading(true)

  }


  return (
    <View style={{ ...styles.body }}>
      <View style={{ ...styles.box }}>
        <View>
          <TextInput  mode="outlined" label="Email" placeholder="Email" value={email}
          />
        </View>
        <View>
          <Text style={{ ...styles.inputText }}>Password</Text>
          <TextInput 
            mode="outlined"
            placeholder="Password"
            value={password}
            onChangeText={pass=>setPassword(pass)}
             />
        </View>
        <View>

          {isLoading ? (
            <View style={{ ...styles.activityContainer }}>
              <ActivityIndicator size="large" color="red" />
            </View>
          ) : <Button onPress={() => signin()}>
            <Text style={{ ...styles.bottomText, color: COLORS.dPink }}>Login</Text>
          </Button>
          }

          <Button onPress={() => navigation.replace('Signup')} style={{ backgroundColor: 'transparent' }}>
            <Text style={{ ...styles.bottomText, color: COLORS.yellow }}>Switch to Sign Up</Text>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 10,

    backgroundColor: COLORS.white,
    padding: 20,
    width: 300
  },
  inputText: {
    fontWeight: 'bold'
  },
  bottomText: {
    fontSize: 20
  }
});
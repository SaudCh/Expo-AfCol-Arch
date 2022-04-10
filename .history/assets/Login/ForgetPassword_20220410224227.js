import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from '../Const/color';

export default function ForgetPassword() {
    const [isLoading, setLoading] = useState(false)

    const [email, setEmail] = useState("")
    
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
                <Text style={{ ...styles.title }}>RESET YOUR PASSWORD</Text>
                <Text>We'll send you a link to reset your password.</Text>
                <TextInput
                    mode="outlined"
                    label="Email"
                    style={{ height: 40, marginTop: 10 }}
                    placeholder="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                />

                <View>

                    {isLoading ? (

                        <View style={{ ...styles.activityContainer }}>
                            <ActivityIndicator size="large" color="red" />
                        </View>

                    ) : (
                        <Button style={{ ...styles.loginButton }} onPress={() => signin()}>
                            <Text style={{ ...styles.loginText }}>SUBMIT</Text>
                        </Button>
                    )}

                    <Button onPress={() => navigation.navigate('Signup')}>
                        <Text style={{ ...styles.signupText }}>Cancel</Text>
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
        fontSize: 18,
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

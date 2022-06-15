import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";
import { COLORS } from '../Const/color';
import { Button } from 'react-native-paper';


export default function AcountDetails() {
    const navigation = useNavigation()
    const [user, setUser] = useState("")

    useFocusEffect(
        useCallback(() => {

            AsyncStorage.getItem("@authen").then((val) => {
                if (val) {
                    const jsonValue = JSON.parse(val);
                    var decoded = jwt_decode(jsonValue.token);
                    // console.log(decoded)
                    setUser(decoded)
                } else {

                }
            });
        })

    );

    return (
        <View style={{ margin: 10, flex: 1 }}>
            <View>
                <Text style={{ ...styles.heading }}>First Name: <Text style={{ ...styles.value }}>{user.firstName}</Text></Text>
                <Text style={{ ...styles.heading }}>Last Name:  <Text style={{ ...styles.value }}>{user.lastName}</Text></Text>
                <Text style={{ ...styles.heading }}>Email:  <Text style={{ ...styles.value }}>{user.email}</Text></Text>
            </View>
            <View style={{ marginTop: 20, position: 'absolute', bottom: 5, width: '100%' }}>
                <Button mode='contained' style={{ marginBottom: 10 }} color={COLORS.dPink} onPress={() => navigation.navigate("EditAccount")}>
                    Edit Account
                </Button>
                <Button mode='outlined' color={COLORS.dPink} style={{ borderColor: COLORS.dPink }} onPress={() => navigation.navigate("EditAccount")}>
                    Change Password
                </Button>
            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: COLORS.dPink
    },
    value: {
        fontSize: 18,
        fontWeight: "100",
        marginBottom: 10,
        color: COLORS.secondary
    }
});
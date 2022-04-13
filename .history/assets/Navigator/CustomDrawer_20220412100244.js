import React, { useState, useCallback } from "react";
import { StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { COLORS } from "../Const/color";
import { Button } from "react-native-paper";
import { View, Text } from 'react-native'
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';


export function CustomDrawer(props) {
    const nav = useNavigation()
    const [user, setUser] = useState(null)

    useFocusEffect(
        useCallback(async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('@storage_Key')
                return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch (e) {
                // error reading value
            }
            return jsonValue
        })
    );

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("@authen");
            props.navigation.closeDrawer();
            ToastAndroid.show("Logged Out", ToastAndroid.SHORT);
        }
        catch (exception) {
            return false;
        }

    };

    const navigate = (screen) => {
        props.navigation.closeDrawer();
        nav.navigate(screen);
    };

    return (
        <View style={{ paddingTop: 39 }}>
            <TouchableOpacity onPress={() => navigate("Home")} style={{ ...styles.btn }}>
                <View style={{ ...styles.dFlex }}>
                    <Entypo name="shopping-cart" size={24} color="black" />
                    <Text style={{ ...styles.btnText }}>Products</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate("History")} style={{ ...styles.btn }}>
                <View style={{ ...styles.dFlex }}>
                    <Feather name="list" size={24} color="black" />
                    <Text style={{ ...styles.btnText }}>Orders</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate("Contact")} style={{ ...styles.btn }}>
                <View style={{ ...styles.dFlex }}>
                    <AntDesign name="contacts" size={24} color="black" />
                    <Text style={{ ...styles.btnText }}>Contact</Text>
                </View>
            </TouchableOpacity>

            {user ?
                <Button onPress={() => logout()} style={{ ...styles.btn, justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.dPink }}>Logout</Text>
                </Button> :
                <Button onPress={() => navigate("Login")} style={{ ...styles.btn, justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.dPink }}>Login</Text>
                </Button>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    dFlex: {
        flexDirection: 'row',
    },
    btnText: {
        paddingLeft: 50
    },
    btn: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        justifyContent: 'flex-start'
    }
});
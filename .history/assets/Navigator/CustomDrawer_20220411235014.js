import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { COLORS } from "../Const/color";
import { Button } from "react-native-paper";
import { View, Text } from 'react-native'
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';


export function CustomDrawer(props) {

    const nav = useNavigation()

    // useFocusEffect(
    //     React.useCallback(() => {
    //         AsyncStorage.getItem("@user_id").then((val) => {
    //             if (val) {
    //                 //console.log(val);
    //                 setUser(val);
    //             } else {
    //                 //setTable("0");
    //                 setUser("0");
    //             }
    //         });
    //     })
    // );

    const logout = async () => {
        nav.navigate("Login")
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

            <Button onPress={() => navigate("Login")} style={{ ...styles.btn, justifyContent: 'center' }}>
                <Text style={{ color: COLORS.dPink }}>Login</Text>
            </Button>
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
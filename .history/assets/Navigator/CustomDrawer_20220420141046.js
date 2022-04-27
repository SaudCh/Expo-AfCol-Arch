import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, TouchableOpacity, ToastAndroid, ActivityIndicator, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { COLORS } from "../Const/color";
import { Button } from "react-native-paper";
import { View, Text } from 'react-native'
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';
import envs from '../../Config/env'



export function CustomDrawer(props) {
    const nav = useNavigation()
    const [user, setUser] = useState(null)
    const [category, setCategory] = useState([])
    const [isLoading, setLoading] = useState(false)


    useEffect(async () => {

        try {

            const response = await fetch(
                envs.DEV_API + `categories`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            );
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message);
            }


            //console.log(responseData.data[0].subCategories)
            setCategory(responseData.data)
            //setLoading(false);
        } catch (err) {
            //setLoading(false);

            let errs = {}
            errs.api = err.message || "Something went wrong, please try again."
            console.log(err.message)
            //setErrors(errs)

        }

    }, []);


    useFocusEffect(
        useCallback(() => {

            AsyncStorage.getItem("@authen").then((val) => {
                if (val) {
                    const jsonValue = JSON.parse(val);
                    setUser(jsonValue)
                } else {
                    setUser(null)
                }
            });
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

            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={category}
                    keyExtractor={({ _id }, index) => _id}
                    renderItem={({ item }) => (
                        <View>{item.subCategories.length === 0 ?
                            <TouchableOpacity>
                                categories
                            </TouchableOpacity> :
                            <Text>
                                subCategories
                            </Text>
                        }</View>
                    )}
                />
            )}


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
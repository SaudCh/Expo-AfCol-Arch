import React, { useState, useEffect } from 'react'
import { Button, Text } from 'react-native-paper';
import { COLORS } from '../../Const/color'
import { useCart } from '../Hooks/cartHook'
import { Entypo } from "@expo/vector-icons"
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function CartButton() {

    const { length, cart, navigation } = useCart()
    console.log(cart.length)
    return (

        <TouchableOpacity
            onPress={() => navigation.navigate("cart")}
            style={{ marginRight: 5 }}
        >
            <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
            {length ?
                <View style={{ ...styles.cartQuantity }}>
                    <Text style={{ color: COLORS.white }}>{cart.length}</Text>
                </View> : null
            }
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    cartQuantity: {
        position: 'absolute',
        right: -10,
        top: -10,
        backgroundColor: 'red',
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    }
})
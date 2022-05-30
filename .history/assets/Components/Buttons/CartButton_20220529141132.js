import React from 'react'
import { Button, Text } from 'react-native-paper';
import { COLORS } from '../../Const/color'
import { useCart } from '../Hooks/cartHook'
import { Entypo } from "@expo/vector-icons"
import { View, TouchableOpacity, StyleSheet } from 'react-native';



export default function CartButton() {

    const { cart, navigation } = useCart()

    return (

        <TouchableOpacity
            onPress={() => navigation.navigate("cart")}
            style={{ marginRight: 5 }}
        >
            <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
            <View style={{ ...styles.cartQuantity }}>
                <Text style={{ color: COLORS.white }}>{cart.length}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    cartQuantity: {
        position: 'absolute', right: 0, top: -5, backgroundColor: 'red',
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    }
})
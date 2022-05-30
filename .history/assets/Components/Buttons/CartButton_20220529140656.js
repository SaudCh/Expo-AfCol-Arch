import React from 'react'
import { Button, Text } from 'react-native-paper';
import { COLORS } from '../../Const/color'
import { useCart } from '../Hooks/cartHook'
import { Entypo } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native';



export default function CartButton() {

    const { cart, navigation } = useCart()

    return (

        <TouchableOpacity
            onPress={() => navigation.navigate("cart")}
            style={{ marginRight: 5 }}
        >
            <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
            <Text style={{ position: 'absolute', right: 0, top: -5 }}>{cart.length}</Text>
        </TouchableOpacity>
    )
}
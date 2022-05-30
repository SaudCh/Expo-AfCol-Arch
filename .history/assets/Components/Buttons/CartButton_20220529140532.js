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
            style={{ backgroundColor: 'red', marginRight: 0 }}
        >
            <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
            <Text>{cart.length}</Text>
        </TouchableOpacity>
    )
}
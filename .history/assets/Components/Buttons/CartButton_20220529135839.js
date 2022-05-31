import React from 'react'
import { Button, Text } from 'react-native-paper';
import { COLORS } from '../../Const/color'
import { useCart } from '../Hooks/cartHook'


export default function CartButton() {

    const { cart, navigation } = useCart()

    return (

        <Button
            onPress={() => navigation.navigate("cart")}
            style={{ backgroundColor: 'transparent' }}
        >
            <Entypo style={{ color: COLORS.dPink }} name="shopping-cart" size={24} color="black" />
            <Text>{cart.length}</Text>
        </Button>
    )
}
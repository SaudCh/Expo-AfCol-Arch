import { View, Text } from 'react-native'
import React from 'react'

export default function ProductDetail(props) {
    const { route } = props;
    const { product } = route.params;
    const { name, images, price, subCategory } = product

    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}
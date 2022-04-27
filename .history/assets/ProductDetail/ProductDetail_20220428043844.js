import { View, Text } from 'react-native'
import React from 'react'

export default function ProductDetail(props) {
    const { route } = props;
    const { product } = route.params;
    console.log(product)
    return (
        <View>
            <Text>{ }</Text>
        </View>
    )
}
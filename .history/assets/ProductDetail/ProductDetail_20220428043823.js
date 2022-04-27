import { View, Text } from 'react-native'
import React from 'react'

export default function ProductDetail(props) {
    console.log(props.route.product)
    return (
        <View>
            <Text>{ }</Text>
        </View>
    )
}
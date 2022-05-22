import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CartCard(props) {
    const { item } = props
    const { name, images, price, subCategory } = item

    console.log(item)
    return (
        <View style={{ ...styles.card }}>
            <Text>{name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        margin: 5
    }
});
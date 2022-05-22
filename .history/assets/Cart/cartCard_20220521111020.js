import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CartCard(props) {
    const { item } = props
    const { name, images, price, subCategory } = item

    const mainImage = images.find(x => x.isMain === true);

    console.log(item)
    return (
        <View style={{ ...styles.card }}>

            <Text>{name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        margin: 5,
        padding: 10,
    }
});
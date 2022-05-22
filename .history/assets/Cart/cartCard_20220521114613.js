import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../Const/color';

export default function CartCard(props) {
    const { item } = props
    const { name, images, price, subCategory, quantity } = item

    const mainImage = images.find(x => x.isMain === true);

    return (
        <View style={{ ...styles.card }}>
            <Image
                style={{ ...styles.cardImage }}
                source={{
                    uri: images.length ? mainImage.url : null,
                }} />
            <View>
                <Text style={{ ...styles.title }}>{name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    {subCategory.discount ? <Text style={{ fontSize: 15, textDecorationLine: "line-through" }}>Rs. {(price * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</Text> : <Text style={{ fontSize: 15 }}>Rs. {price}</Text>}
                    {subCategory.discount ? <Text style={{ fontSize: 15, color: COLORS.success }}> Rs. {((price - subCategory.discount) * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</Text> : null}

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        margin: 5,
        padding: 10,
        flexDirection: 'row'
    },
    cardImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 5
    },
});
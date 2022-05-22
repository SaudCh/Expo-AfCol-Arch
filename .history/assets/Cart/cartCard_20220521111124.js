import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CartCard(props) {
    const { item } = props
    const { name, images, price, subCategory } = item

    const mainImage = images.find(x => x.isMain === true);

    return (
        <View style={{ ...styles.card }}>
            <Image
                style={{ ...styles.cardImage }}
                source={{
                    uri: images.length ? mainImage.url : null,
                }} />
            <Text>{name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        margin: 5,
        padding: 10,
    },
    cardImage: {
        width: dimensions.width * 0.4,
        height: dimensions.height * 0.2,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 10
    },
});
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { dimensions } from "../../Const/heightWidth"
const mainImage = images.find(x => x.isMain === true);


export default function ProductDetail(props) {
    const { route } = props;
    const { product } = route.params;
    const { name, images, price, subCategory } = product

    return (
        <View>
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
        width: dimensions.width * 0.45,
        alignItems: 'center',
        marginBottom: 25,
        marginHorizontal: 5,
        paddingBottom: 10,
        borderRadius: 10
    },
    cardImage: {
        width: dimensions.width,
        height: dimensions.height * 0.2,
        resizeMode: 'cover',
        alignSelf: 'center',
    },

});
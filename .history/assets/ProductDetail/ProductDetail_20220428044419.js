import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { dimensions } from "../Const/heightWidth"


export default function ProductDetail(props) {
    const { route } = props;
    const { product } = route.params;
    console.log(product.images)
    const { name, images, price, subCategory } = product

    const mainImage = images.find(x => x.isMain === true);

    return (
        <View>
            <Image
                style={{ ...styles.prodImage }}
                source={{
                    uri: name ? mainImage.url : null,
                }} />
            <Text>{name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    prodImage: {
        width: dimensions.width,
        height: dimensions.height * 0.4,
        resizeMode: 'cover',
        alignSelf: 'center',
    },

});
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { dimensions } from "../Const/heightWidth"
import { DecrementIcon, IncrementIcon } from '../Components/Icons/Icon';


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

            <View>
                <View>
                    <IncrementIcon />
                </View>
                <Text>1</Text>
                <View>
                    <DecrementIcon />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    prodImage: {
        width: dimensions.width,
        height: dimensions.height * 0.3,
        resizeMode: 'cover',
        alignSelf: 'center',
    },

});
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { dimensions } from "../Const/heightWidth"
import { DecrementIcon, IncrementIcon } from '../Components/Icons/Icon';
import { globalStyle } from '../Components/Styles/GlobalStyles';


export default function ProductDetail(props) {
    const { route } = props;
    const { product } = route.params;

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

            <View style={{ ...globalStyle.hStack }}>
                <View style={{ ...styles.incContainer }}>
                    <IncrementIcon />
                </View>
                <Text style={{ fontSize: 20}}>1</Text>
                <View style={{ ...styles.decContainer }}>
                    <DecrementIcon />
                </View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    prodImage: {
        width: dimensions.width,
        height: dimensions.height * 0.3,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    incContainer: {
        borderRightWidth: 1,
        borderColor: "rgba(0,0,0,0.3)"
    },
    decContainer: {
        borderLeftWidth: 1,
        borderColor: "rgba(0,0,0,0.3)"
    }
});
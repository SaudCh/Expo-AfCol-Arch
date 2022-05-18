import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { dimensions } from "../Const/heightWidth"
import { DecrementIcon, IncrementIcon } from '../Components/Icons/Icon';
import { globalStyle } from '../Components/Styles/GlobalStyles';
import { Button } from 'react-native-paper';
import { COLORS } from '../Const/color';


export default function ProductDetail(props) {
    const { route } = props;
    const { product } = route.params;
    console.log(product)
    const { name, images, price, subCategory, stock, category } = product

    const mainImage = images.find(x => x.isMain === true);

    return (
        <View style={{ ...styles.container }}>
            <Image
                style={{ ...styles.prodImage }}
                source={{
                    uri: name ? mainImage.url : null,
                }} />

            <View style={{ padding: 10 }}>
                <Text style={{ ...styles.title }}>{name}</Text>

                {stock ? <Text style={{ ...styles.inStock }}>In Stock</Text> : <Text style={{ ...styles.outStock }}>Out of Stock</Text>}

                {<Text>Rs. {price}</Text>}

                <Text style={{ ...styles.collection }}><Text style={{ fontWeight: 'bold' }}>Collections: </Text>{subCategory.name}</Text>

            </View>
            <View style={{ ...globalStyle.hStack, ...styles.cartContainer }}>
                <View style={{ ...globalStyle.hStack, ...globalStyle.border }}>
                    <View style={{ ...styles.incContainer }}>
                        <IncrementIcon />
                    </View>
                    <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>1</Text>
                    <View style={{ ...styles.decContainer }}>
                        <DecrementIcon />
                    </View>
                </View>
                <Button mode="contained" color={COLORS.dPink} style={{ paddingHorizontal: 50 }}>
                    <Text>ADD TO CART</Text>
                </Button>
            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    prodImage: {
        width: dimensions.width,
        height: dimensions.height * 0.3,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        marginVertical: 5
    },
    collection: {
        fontSize: 15,
        marginBottom: 5
    },
    inStock: {
        fontSize: 15,
        marginBottom: 5,
        color: COLORS.success
    },
    outStock: {
        fontSize: 15,
        marginBottom: 5,
        color: COLORS.danger
    },
    cartContainer: {
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 5,
        paddingHorizontal: 10,
        width: "100%"
    },
    incContainer: {
        borderRightWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        padding: 5
    },
    decContainer: {
        borderLeftWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        padding: 5
    }
});
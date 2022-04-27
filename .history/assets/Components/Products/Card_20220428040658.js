import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { dimensions } from "../../Const/heightWidth"
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { COLORS } from '../../Const/color'

const Card = (props) => {
    const { item } = props
    const { name, images, price,subCategory } = item
    console.log(item)

    const mainImage = images.find(x => x.isMain === true);

    return (
        <View style={{ ...styles.card }}>
            <Image
                style={{ ...styles.cardImage }}
                source={{
                    uri: images.length ? mainImage.url : null,
                }} />
            <Text style={{ ...styles.productTitle }}>{name}</Text>
            <Text style={{ ...styles.productPrice }}>{price}</Text>
        </View>
    )
}

export default Card
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
        width: dimensions.width * 0.4,
        height: dimensions.height * 0.2,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 10
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.dPink,
        marginTop: 5
    },
    productPrice: {

    }

});
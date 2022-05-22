import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../Const/color';
import { globalStyle } from '../Components/Styles/GlobalStyles';
import { TouchableOpacity } from 'react-native';
import { CirleCross, DecrementIcon, IncrementIcon } from '../Components/Icons/Icon';

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
            <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between' }}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ ...styles.title }}>{name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {subCategory.discount ? <Text style={{ fontSize: 15, textDecorationLine: "line-through" }}>Rs. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</Text> : <Text style={{ fontSize: 15 }}>Rs. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</Text>}
                        {subCategory.discount ? <Text style={{ fontSize: 15, color: COLORS.success }}> Rs. {(price - subCategory.discount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</Text> : null}
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>Rs {(price * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</Text>
                    <View style={{ ...globalStyle.hStack, ...globalStyle.border, borderRadius: 10 }}>

                        <TouchableOpacity onPress={() => decQuantity()} style={{ ...styles.decContainer }}>
                            <DecrementIcon size={20} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 14, paddingHorizontal: 10, }}>{quantity}</Text>
                        <TouchableOpacity onPress={() => incQuantity()} style={{ ...styles.incContainer }}>
                            <IncrementIcon size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <CirleCross color={COLORS.danger} style={{ marginLeft: 10 }} />
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: '#fff',
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: COLORS.dPink,
        marginBottom: 2
    },
    incContainer: {
        borderLeftWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 2
    },
    decContainer: {
        borderRightWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 2
    }
});
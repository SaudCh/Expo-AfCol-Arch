import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../Const/color";
import { globalStyle } from "../Components/Styles/GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartCard from "./cartCard";
import { set } from "react-native-reanimated";

export default function Cart() {
    const [isLoading, setLoading] = useState(false)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(async () => {
        var crt;
        const jsonValue = await AsyncStorage.getItem('@cart')
        jsonValue != null ? crt = JSON.parse(jsonValue) : null;
        setCart(crt)
        let tot = 0;
        crt.map((e) => {
            actprice = e.subCategory.discount ? e.price - e.subCategory.discount : e.price
            tot = tot + actprice * e.quantity
        })

        setTotal(tot)
    }, [])

    return (
        <View style={{ ...styles.body }}>
            <View>
                {isLoading ? <ActivityIndicator size="large" color="#fof" /> : (

                    <FlatList
                        data={cart}
                        // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        ListEmptyComponent={<View><Text>Empty</Text></View>}
                        style={{ paddingTop: 10 }}
                        keyExtractor={({ id }) => id}
                        renderItem={(item) => (
                            <CartCard item={item.item} />
                        )}
                    />
                )}

            </View>
            <View style={{ ...globalStyle.hStack, ...styles.totalContainer }}>
                <View>
                    <Text style={{ fontWeight: "bold" }}>
                        Total
                    </Text>
                    <Text style={{ fontSize: 20 }}>
                        {total} PKR
                    </Text>
                </View>
                <Button mode="contained" color={COLORS.dPink} style={{ paddingHorizontal: 5 }}>
                    <Text>Proceed to Checkout</Text>
                </Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    totalContainer: {
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 15,
        paddingRight: 10,
        paddingLeft: 20,
        width: "100%"
    },
});

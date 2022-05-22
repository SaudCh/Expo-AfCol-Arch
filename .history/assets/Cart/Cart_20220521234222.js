import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { COLORS } from "../Const/color";
import { globalStyle } from "../Components/Styles/GlobalStyles";
import CartCard from "./cartCard";
import { useCart } from "../Components/Hooks/cartHook";
import { changeNS } from "../Components/Functions/Global";

export default function Cart() {
    const [isLoading, setLoading] = useState(false)

    const { cart, total, deleteItem, incQuan, decQuan } = useCart()

    return (
        <View style={{ ...styles.body }}>
            <View>
                {isLoading ? <ActivityIndicator size="large" color="#fof" /> : (

                    <FlatList
                        data={cart}
                        ListEmptyComponent={<View><Text>Empty</Text></View>}
                        style={{ paddingTop: 10 }}
                        keyExtractor={({ id }) => id}
                        renderItem={(item) => (
                            <CartCard item={item.item} deleteItem={deleteItem} incQuan={incQuan} decQuan={decQuan} />
                        )}
                    />
                )}

            </View>
            <View style={{ ...globalStyle.hStack, ...styles.totalContainer }}>
                <View style={{ height: 100, backgroundColor: '#fff' }}>
                            <Text>Hello</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold" }}>
                        Total
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        {changeNS(total)} PKR
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

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
            <View style={{ ...styles.totalContainer }}>
                <View style={{ height: 200, backgroundColor: '#fff' }}>
                    <TextInput mode="outlined" label="Add a Note to your Order" multiline={true} numberOfLines={8} />
                </View>
                <Text style={{ margin: 0 }}>Shipping & taxes calculated at checkout</Text>
                <View style={{ ...globalStyle.hStack, justifyContent: 'space-between', }}>
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
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    totalContainer: {
        position: 'absolute',
        bottom: 0,
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 20,
        width: "100%",
        backgroundColor: "#fff"
    },
});

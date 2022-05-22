import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../Const/color";
import { globalStyle } from "../Components/Styles/GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cart() {
    const [isLoading, setLoading] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(async () => {
        var crt;
        const jsonValue = await AsyncStorage.getItem('@cart')
        jsonValue != null ? crt = JSON.parse(jsonValue) : null;
        setCart(crt)
    }, [])

    return (
        <View style={{ ...styles.body }}>
            <View>
                {isLoading ? <ActivityIndicator size="large" color="#fof" /> : (

                    <FlatList
                        data={cart}
                        // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        // ListEmptyComponent={<NoProductFound />}
                        numColumns={2}
                        style={{ paddingTop: 10 }}
                        keyExtractor={({ _id }) => _id}
                        renderItem={(item) => (
                            // <ProductCard item={item.item} />
                            <Text>{item.name}</Text>
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
                        3200 PKR
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
        alignItems: "center",
        justifyContent: 'center',
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

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity, ToastAndroid } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../Const/color";
import { globalStyle } from "../Components/Styles/GlobalStyles";

export default function Cart() {
    const [isLoading, setLoading] = useState(false)

    return (
        <View style={{...styles.body}}>
            <View style={{ ...globalStyle.hStack, ...styles.totalContainer }}>
                <Text style={{ fontWeight: "bold" }}>
                    Total
                </Text>
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
        backgroundColor: COLORS.lPink
    },
    totalContainer: {
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 15,
        paddingRight: 10,
        width: "100%"
    },
});

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function cartCard() {
    return (
        <View>
            <Text>cartCard</Text>
        </View>
    )
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
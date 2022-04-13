import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-paper';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TextInput
                style={{ ...styles.input }}
            />
            <Text>Home</Text>
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: COLORS.lPink
    },
    box: {

        borderRadius: 10,
        backgroundColor: COLORS.white,
        padding: 20,
        width: 300,

        // Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,

    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: COLORS.dPink
    },
    forgetPass: {
        textAlign: 'right'
    },
    loginButton: {
        backgroundColor: COLORS.dPink,
        width: 100,
        alignSelf: 'center',
        marginVertical: 10
    },
    loginText: {
        color: COLORS.white
    },
    signupText: {
        color: COLORS.yellow
    },
    errors: {
        color: 'red'
    },
    apiErrors: {
        color: 'red',
        padding: 0,
        margin: 0,
        marginTop: 10,
    }
});
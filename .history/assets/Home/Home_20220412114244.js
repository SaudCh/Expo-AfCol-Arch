import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { TextInput as Input } from 'react-native-paper';
import { dimensions } from "../Const/heightWidth"

const Home = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TextInput
                style={{ ...styles.searchInput }}
                placeholder="Search"
            />

            <Text>Home</Text>
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    searchInput: {
        height: 45,
        paddingLeft: 20,
        backgroundColor: '#DCDCDC'

    }
});
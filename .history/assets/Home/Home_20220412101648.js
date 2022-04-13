import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-paper';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TextInput
                style={{ ...styles.searchInput }}
            />
            <Text>Home</Text>
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    searchInput: {
        borderWidth: 1,
        borderRadius: 20,
        height: 50
    }
});
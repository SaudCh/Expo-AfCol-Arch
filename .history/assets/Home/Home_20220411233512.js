import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home
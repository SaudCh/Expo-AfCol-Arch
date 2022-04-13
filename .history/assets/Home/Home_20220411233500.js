import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const Home = (props) => {
    const nav = useNavigation()

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home
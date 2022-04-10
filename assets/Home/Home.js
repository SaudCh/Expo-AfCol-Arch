import { View, Text, Button } from 'react-native'
import React from 'react'
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
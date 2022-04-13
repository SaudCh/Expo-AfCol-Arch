import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-paper';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TextInput 
            />
            <Text>Home</Text>
        </View>
    )
}

export default Home
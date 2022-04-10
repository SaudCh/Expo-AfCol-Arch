import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const ForgetPassword = (props) => {
    const nav = useNavigation()

    return (
        <View>
            <Text>Forget Password</Text>
        </View>
    )
}

export default ForgetPassword
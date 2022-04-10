import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <Button onPress={()=>console.log("Hello")} title='click me'/>
        </View>
    )
}

export default Home
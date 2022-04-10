import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = (props) => {
    const {navigation} = props
    return (
        <View>
            <Text>Home</Text>
            <Button onPress={()=>navigation.navigate('Login')} title='click me'/>
        </View>
    )
}

export default Home
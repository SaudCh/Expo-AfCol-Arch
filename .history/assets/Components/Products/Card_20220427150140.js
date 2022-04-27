import { View, Text } from 'react-native'
import React from 'react'

const Card = (props) => {
    const { item } = props
    const { name, images } = item
    return (
        <View View style={{ borderWidth: 1 }}>
            <Image

                style={{ width: 100, height: 100 }}
                source={{
                    uri: images.length ? images[0].url : null,
                }} />
            <Text>{name}</Text>
        </View>
    )
}

export default Card
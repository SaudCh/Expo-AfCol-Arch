import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Card = (props) => {
    const { item } = props
    const { name, images } = item

    const mainImage = images.find(x => x.isMain === true);

    return (
        <View>
            <Image

                style={{ width: 100, height: 100 }}
                source={{
                    uri: images.length ? mainImage.url : null,
                }} />
            <Text>{name}</Text>
        </View>
    )
}

export default Card
const styles = StyleSheet.create({
    searchInput: {
        height: 45,
        paddingLeft: 20,
        backgroundColor: '#DCDCDC'

    }
});
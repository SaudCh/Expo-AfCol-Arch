import { View, Text } from 'react-native'
import React from 'react'

export default function SubCategoryCard({ subcategory }) {
    const { name } = subcategory;
    return (
        <View>
            <Text style={{ fontSize: 17, fontWeight: 200 }}>{name}</Text>
        </View>
    )
}
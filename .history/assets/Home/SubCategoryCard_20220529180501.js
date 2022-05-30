import { View, Text } from 'react-native'
import React from 'react'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'

export default function SubCategoryCard({ subcategory }) {
    const { name } = subcategory;
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}
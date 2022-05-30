import { View, Text, FlatList } from 'react-native'
import React from 'react'

import ProductCard from '../Components/Products/Card';

export default function SubCategoryCard(props) {
    const { subcategory } = props
    const { name, products } = subcategory;

    const NoProductFound = () => {
        return (
            <View>
                <Text>No Product Found</Text>
            </View>
        )
    }

    return (
        <View>
            <Text style={{ fontSize: 19, fontWeight: '500', marginLeft: 5 }}>{name}</Text>
            <FlatList
                data={products}
                ListEmptyComponent={<NoProductFound />}
                numColumns={2}
                style={{ paddingTop: 10 }}
                keyExtractor={({ _id }) => _id}
                renderItem={(item) => (
                    <ProductCard item={item.item} />
                )}
            />
        </View>
    )
}
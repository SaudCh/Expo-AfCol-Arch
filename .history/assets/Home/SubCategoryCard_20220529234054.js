import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function SubCategoryCard({ subcategory }) {
    const { name } = subcategory;
    return (
        <View>
            <Text style={{ fontSize: 17, fontWeight: '200' }}>{name}</Text>
            <FlatList
                data={filterProd}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                ListEmptyComponent={<NoProductFound />}
                // numColumns={2}
                style={{ paddingTop: 10 }}
                keyExtractor={({ _id }) => _id}
                renderItem={(item) => (
                    // <ProductCard item={item.item} />
                    <SubCategoryCard subcategory={item.item} />
                )}
            />
        </View>
    )
}
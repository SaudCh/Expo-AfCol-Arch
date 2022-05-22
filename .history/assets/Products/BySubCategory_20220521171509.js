import React, { useState, useEffect, useCallback } from 'react'
import { RefreshControl, View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { useHome } from '../Components/Hooks/homeHook';
import { useProdBySC } from '../Components/Hooks/useProdBySC';
import ProductCard from '../Components/Products/Card';


export default function BySubCategory({ route }) {

    const { id } = route.params
    const { isLoading, refreshing, filterProd, onRefresh, searchProducts } = useProdBySC(id)

    const NoProductFound = () => {
        return (
            <View>
                <Text>No Product Found</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Searchbar
                placeholder="Search"
                value={search}
                onChangeText={(text) => searchProducts(text)}
            />
            {isLoading ? <ActivityIndicator size="large" color="#fof" /> : (

                <FlatList
                    data={filterProd}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    ListEmptyComponent={<NoProductFound />}
                    numColumns={2}
                    style={{ paddingTop: 10 }}
                    keyExtractor={({ _id }) => _id}
                    renderItem={(item) => (
                        <ProductCard item={item.item} />
                    )}
                />
            )}

        </View>
    )
}
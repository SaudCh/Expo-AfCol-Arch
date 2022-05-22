import React, { useState, useEffect } from 'react'
import { RefreshControl, View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { useHome } from '../Components/Hooks/homeHook';
import ProductCard from '../Components/Products/Card';


export default function BySubCategory({ route }) {

    const { products, isLoading, refreshing, onRefresh, search, searchProducts } = useHome()

    const [filterProd, setFilterProd] = useState([])

    const { id } = route.params

    useEffect(() => {
        if (id) {
            const newProd = products.filter((val) => {
                return val.subCategory._id.toLowerCase().includes(id.toLowerCase())
            })
            setFilterProd(newProd)
        }
    })

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
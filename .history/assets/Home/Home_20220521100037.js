import React from 'react'
import { RefreshControl, View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { useHome } from '../Components/Hooks/homeHook';
import ProductCard from '../Components/Products/Card';


const Home = () => {

    const { navigation, products, isLoading, refreshing, onRefresh } = useHome()

    return (
        <View style={{ flex: 1 }}>
            <Searchbar
                placeholder="Search"
            />
            {isLoading ? <ActivityIndicator size="large" color="#fof" /> : (

                <FlatList
                    data={products}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    numColumns={2}
                    style={{ paddingTop: 10 }}
                    keyExtractor={({ _id }, index) => _id}
                    renderItem={(item) => (
                        <ProductCard item={item.item} />
                    )}
                />
            )}

        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    searchInput: {
        height: 45,
        paddingLeft: 20,
        backgroundColor: '#DCDCDC',
    }
});
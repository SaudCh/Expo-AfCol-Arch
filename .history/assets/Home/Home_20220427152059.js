import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { TextInput as Input } from 'react-native-paper';
import { dimensions } from "../Const/heightWidth"
import envs from '../../Config/env'
import ProductCard from '../Components/Products/Card';


const Home = () => {
    const navigation = useNavigation();
    const [products, setProduct] = useState([])
    const [isLoading, setLoading] = useState(false)


    useEffect(async () => {

        try {
            setLoading(true)
            const response = await fetch(
                envs.DEV_API + `products`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            );
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message);
            }


            setProduct(responseData.data)
            //console.log(products[0].name)
            setLoading(false);
        } catch (err) {
            setLoading(false);

            let errs = {}
            errs.api = err.message || "Something went wrong, please try again."
            console.log(err.message)
            //setErrors(errs)

        }

    }, []);

    return (
        <View style={{  }}>
            <TextInput
                style={{ ...styles.searchInput }}
                placeholder="Search"
            />

            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={products}
                    style={{paddingTop:100}}
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
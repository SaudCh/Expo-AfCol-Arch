import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ActivityIndicator, List } from 'react-native-paper'
import { useCart } from '../Components/Hooks/cartHook'
import CartSection from './CartSection';
import { globalStyle } from '../Components/Styles/GlobalStyles';
import ContactInfo from './ContactInfo';
import { changeNS } from '../Components/Functions/Global';
import { useEffect } from 'react/cjs/react.production.min';

export default function Checkout() {
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);
    const { cart, isLoading, total } = useCart()

    useEffect(async () => {
        var user;
        const jsonValue = await AsyncStorage.getItem('@cart')
        jsonValue != null ? user = JSON.parse(jsonValue) : null;
        console.log(user)
    })
    return (
        <ScrollView>
            <List.Section >
                <List.Accordion
                    title="Cart"
                >
                    <View style={{ ...styles.card, ...globalStyle.shadow }}>
                        {isLoading ? <ActivityIndicator size="large" color="#fof" /> : (

                            <FlatList
                                data={cart}
                                ListEmptyComponent={<View style={{ justifyContent: 'center', alignItems: "center" }}><Text>Empty</Text></View>}
                                style={{ paddingTop: 10 }}
                                keyExtractor={({ id }) => id}
                                renderItem={(item) => (
                                    <CartSection item={item.item} />
                                )}
                            />
                        )}

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 }}>
                            <Text>Sub Total</Text>
                            <Text>Rs. {changeNS(total)}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 }}>
                            <Text>Shipping</Text>
                            <Text>---</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 }}>
                            <Text style={{ fontWeight: "bold" }}>Total</Text>
                            <Text style={{ fontWeight: "bold" }}>Rs. {changeNS(total)}</Text>
                        </View>

                    </View>
                </List.Accordion>

                <List.Accordion
                    title="Information"
                    expanded={expanded}
                    onPress={handlePress}>
                    <ContactInfo />
                </List.Accordion>
            </List.Section>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: '#fff',
        margin: 5,
        padding: 10,
    },
});
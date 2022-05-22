import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Button, List } from 'react-native-paper'
import { useCart } from '../Components/Hooks/cartHook'
import { globalStyle } from '../Components/Styles/GlobalStyles';
import { changeNS } from '../Components/Functions/Global';
import { COLORS } from '../Const/color';
import { useNavigation } from '@react-navigation/native';
import CartSection from '../Checkout/CartSection';


export default function Payment({ route }) {
    const navigation = useNavigation()

    const { data } = route.params
    const { address, phone, note } = data
    const { cart, isLoading, total } = useCart();

    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <Text>{note}</Text>
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
                    >
                        <View style={{ ...styles.card, ...globalStyle.shadow }}>
                            <View style={{ marginVertical: 10 }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontWeight: "600", fontSize: 18 }}>Contact</Text>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Text style={{ fontWeight: "700", fontSize: 15, color: COLORS.dPink }}>Change</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text>{phone}</Text>
                            </View>
                            <View style={{ borderWidth: 0.2 }}></View>
                            <View style={{ marginVertical: 10 }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontWeight: "600", fontSize: 18 }}>Address</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('checkout')}>
                                        <Text style={{ fontWeight: "700", fontSize: 15, color: COLORS.dPink }}>Change</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text>{address}</Text>
                            </View>
                        </View>
                    </List.Accordion>
                    <List.Accordion
                        title="Shipping"
                    >
                        <View style={{ ...styles.card, ...globalStyle.shadow }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontWeight: "600", fontSize: 16 }}>Delivery Charges</Text>
                                <Text style={{ fontWeight: "700", fontSize: 15, color: COLORS.dPink }}>Rs. {changeNS(150)}</Text>

                            </View>
                        </View>
                    </List.Accordion>
                    <List.Accordion
                        title="Payment"
                        expanded={expanded}
                        onPress={handlePress}
                    >
                        <View style={{ ...styles.card, ...globalStyle.shadow }}>
                            <View >
                                <Text style={{ fontWeight: "700", fontSize: 15, color: COLORS.dPink }}>Jazz Cash</Text>

                            </View>
                        </View>
                    </List.Accordion>
                </List.Section>

            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", margin: 5 }}>
                <Button color={COLORS.dPink} onPress={() => navigation.goBack()}>Return to Shipping</Button>
                <Button style={{ backgroundColor: COLORS.dPink }} color='#fff' onPress={() => handleSubmit()}>Complete Order</Button>
            </View>
        </View >

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
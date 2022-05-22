import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ActivityIndicator, List } from 'react-native-paper'
import { useCart } from '../Components/Hooks/cartHook'
import CartCard from '../Cart/cartCard';
import CartSection from './CartSection';
import { globalStyle } from '../Components/Styles/GlobalStyles';
import ContactInfo from './ContactInfo';
import { changeNS } from '../Components/Functions/Global';

export default function Checkout() {
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);
    const { cart, isLoading, total } = useCart()


    return (
        <View>
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

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10 }}>
                            <Text>Sub Total</Text>
                            <Text>Rs. {changeNS(total)}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10 }}>
                            <Text>Sub Total</Text>
                            <Text>Rs. {changeNS(total)}</Text>
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

        </View>
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
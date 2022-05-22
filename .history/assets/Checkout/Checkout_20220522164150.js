import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { List } from 'react-native-paper'
import {useCart} from '../Components/Hooks/cartHook'

export default function Checkout() {
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);
    const { cart, total, deleteItem, incQuan, decQuan, navigation, isLoading } = useCart()


    return (
        <View>
            <List.Section >
                <List.Accordion
                    title="Carts"
                >
                    <View>

                    </View>
                </List.Accordion>

                <List.Accordion
                    title="Controlled Accordion"
                    expanded={expanded}
                    onPress={handlePress}>
                    <View>

                    </View>
                </List.Accordion>
            </List.Section>

        </View>
    )
}
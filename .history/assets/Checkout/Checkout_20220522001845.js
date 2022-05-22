import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { List } from 'react-native-paper'

export default function Checkout() {
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <View>
            <List.Section title="Accordions">
                <List.Accordion
                    title="Products"
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
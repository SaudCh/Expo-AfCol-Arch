import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

export default function ContactInfo() {
    const [email, setEmail] = useState("")
    return (
        <View>
            <View>
                <Text>Contact Info</Text>
                <TextInput
                    mode="outlined"
                    label="Email"
                    style={{ height: 40, marginTop: errors.api ? 5 : 10 }}
                    placeholder="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
            </View>
        </View>
    )
}
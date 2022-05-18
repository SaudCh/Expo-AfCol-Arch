import React from 'react'
import { Entypo, AntDesign } from "@expo/vector-icons"

export const IncrementIcon = (props) => {
    const { size } = props
    return
    (< AntDesign name="plus" size={size ? size : 24} color="black" />)
}
import React from 'react'
import { Entypo, AntDesign } from "@expo/vector-icons"

export const IncrementIcon = (props) => {
    const { size, color } = props
    return (
        < AntDesign name="plus" size={size ? size : 24} color={color ? color : "black"} />
    )
}

export const DecrementIcon = (props) => {
    const { size, color } = props
    return (
        < AntDesign name="minus" size={size ? size : 24} color={color ? color : "black"} />
    )
}

export const CirleCross = (props) => {
    const { size, color } = props
    return (
        < Entypo name="circle-with-cross" size={size ? size : 24} color={color ? color : "black"} />
    )
}

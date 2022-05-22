import React from 'react'

export const changeNumberSystem = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+".00"
}
import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Home/Home'
import { DrawerContent } from './CustomDrawer'
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>

            <Drawer.Screen name="Home" component={Home} />
            {/* <Drawer.Screen name="Contact" component={Contact} options={{
                title: 'Contact Us',
                headerTintColor: COLORS.dPink,
            }}
            /> */}



        </Drawer.Navigator>
    )
}

export default DrawerNavigation
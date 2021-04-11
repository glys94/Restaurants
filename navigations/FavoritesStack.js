import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Restaurant from '../screens/Restaurant'

const Stack = createStackNavigator()

export  function RestaurantsStack() {
    return (
    <Stack.Navigatior>
        <Stack.screen
         name="restaurant"
         component={Restaurant}
         options={{tittle: "Restaurantes"}}
        />
    </Stack.Navigatior>    
    )
}

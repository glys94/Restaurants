import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import TopRestaurants from '../screens/TopRestaurants'

const Stack = createStackNavigator()

export  function TopRestaurantStack() {
    return (
    <Stack.Navigatior>
        <Stack.screen
         name="top-restaurants"
         component={TopRestaurants}
         options={{tittle: "Top 5"}}
        />
    </Stack.Navigatior>    
    )
}

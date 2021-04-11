import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Account from '../screens/Account'

const Stack = createStackNavigator()

export  function AccountStack() {
    return (
    <Stack.Navigatior>
        <Stack.screen
         name="account"
         component={Account}
         options={{tittle: "Cuenta"}}
        />
    </Stack.Navigatior>    
    )
}

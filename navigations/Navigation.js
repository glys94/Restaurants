import  React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import RestaurantsStack from './RestaurantsStack'
import { FavoritesStack } from './FavoritesStack'
import { SearchStack } from './AccountStack'
import { AccountStack } from './SearchStack'
import { TopRestaurantsStack} from '/TopRestaurantsStack'


const Tab = createBottomTabNavigator( )

export function Navigation() {
   
    return (
        <NavigationContainer>
            <Tab.Navigatior>
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{tittle: "Restaurantes"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{tittle: "Favoritos"}}
                />
                <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{tittle: "Buscar"}}
                />
                <Tab.Screen
                    name="top-restaurants"
                    component={TopRestaurantsStack}
                    options={{tittle: "Top 5"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{tittle: "Cuenta"}}
                />
            </Tab.Navigatior>
        </NavigationContainer>
       

    )
}   
 

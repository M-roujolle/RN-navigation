import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import TextScreen from '../screens/TextScreen'
import ImageScreen from '../screens/ImageScreen'
import { Platform } from 'react-native'

const Tab = createBottomTabNavigator()

const NavigationTab = () => {
    return (
        <NavigationContainer>

            <Tab.Navigator
                screenOptions={({route}) => ({
                tabBarIcon:({focused}) => {
                    let iconName
                    console.table(route)
                    if(route.name==='Image'){
                        Platform.OS==='android'
                        ?
                            (iconName = focused ? 'md-image' : 'md-image-outline')
                        :
                            (iconName = focused ? 'ios-image' : 'ios-image-outline')
                    }
                    else if(route.name==='Text') {
                        Platform.OS==='android'
                        ?
                            (iconName = focused ? 'md-text' : 'md-text-outline')
                        :
                            (iconName = focused ? 'ios-text' : 'ios-text-outline')
                    }

                    return <Ionicons name={iconName} size={32} />
                },
                tabBarActiveTintColor:'tomato',
                tabBarInActiveTintColor:'gray',

                })}
            >
                <Tab.Screen name='Image' component={ImageScreen}/>
                <Tab.Screen name='Text' component={TextScreen}/>
            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default NavigationTab

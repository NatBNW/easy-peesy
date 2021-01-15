import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import * as React from 'react';
import Menu from './Menu';

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Easy Peesy" component={Menu} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
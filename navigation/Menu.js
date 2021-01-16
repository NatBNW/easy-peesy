import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from '../screens/MapScreen';
import AddBathroomScreen from '../screens/AddBathroomScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import NavigationScreen from '../screens/NavigationScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import SettingsScreen from '../screens/SettingsScreen';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>HOME</Text>
            <Button
                onPress={() => navigation.navigate('Map')}
                title="Go to maps"
            />
            <Button
                onPress={() => navigation.navigate('Add A Bathroom')}
                title="Add a bathroom"
            />
            <Button
                onPress={() => navigation.navigate('About')}
                title="Go to about us"
            />
            <Button
                onPress={() => navigation.navigate('Contact')}
                title="Go to contacts"
            />
            <Button
                onPress={() => navigation.navigate('Details')}
                title="Go to details"
            />
            <Button
                onPress={() => navigation.navigate('Login')}
                title="Login"
            />
            <Button
                onPress={() => navigation.navigate('Navigation')}
                title="Go to navigation"
            />
            <Button
                onPress={() => navigation.navigate('Reviews')}
                title="Go to reviews"
            />
            <Button
                onPress={() => navigation.navigate('Settings')}
                title="Go to settings"
            />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function Menu() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Map" component={MapScreen} />
            <Drawer.Screen name="Add A Bathroom" component={AddBathroomScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Contact" component={ContactScreen} />
            <Drawer.Screen name="Details" component={DetailsScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Navigation" component={NavigationScreen} />
            <Drawer.Screen name="Reviews" component={ReviewsScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}
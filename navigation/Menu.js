import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from '../screens/MapScreen';
import SettingScreen from '../screens/SettingScreen';


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>HOME</Text>
            <Button
                onPress={() => navigation.navigate('Map')}
                title="Go to maps"
            />
            <Button
                onPress={() => navigation.navigate('Setting')}
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
            <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
    );
}
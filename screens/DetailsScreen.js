import * as React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

export default function DetailsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DETAILS</Text>
            <View style={styles.separator} />
            <Text style={styles.title}>Name of This Restroom</Text>
            <View style={styles.separator} />
            <Image
        style={{
            resizeMode: "cover",
            height: 100,
            width: 200
        }}
        source={require('../assets/placeholder-image.png')}
        />
        <View style={styles.separator} />
        <Text style={styles.base}>Description of this restroom</Text>
        <View style={styles.separator} />
        <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});


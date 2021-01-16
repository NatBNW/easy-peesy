import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function ReviewsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>REVIEWS</Text>
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
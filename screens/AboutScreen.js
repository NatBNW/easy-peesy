import * as React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ABOUT US</Text>
            <View style={styles.bar} />
            <Text style={styles.text}> Like minded people (that's us the creators!) in a coding boot camp thought the world needed a restroom locator app for underserved communities, so we built it! So whether you're a member of the trans, differently abled or over lander communities; a parent with a baby or toddler, or just someone trying to finding a good public restroom in an unfamiliar place - Easy peesy has you covered!  This is a community supported project.  We are always looking for help. Check out the contact page.</Text>
            <Image
                style={styles.logo}
                source={require('../assets/placeholder-image.png')}
            />
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
        padding: 15,
    },
    bar: {
        backgroundColor: '#000000',
        width: 200,
        height: 3,
        margin: 10,
    },
    logo: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
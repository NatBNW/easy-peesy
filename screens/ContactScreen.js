import * as React from 'react';
import qs from 'qs';
import { StyleSheet, View, Text, Button, Image, TextInput, Linking } from 'react-native';

export default function ContactScreen({ navigation }) {
    const [subject, onChangeSubject] = React.useState('');
    const [body, onChangeBody] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CONTACT US</Text>
            <Image
                style={styles.logo}
                source={require('../assets/placeholder-image.png')}
            />
            <View style={styles.separator} />
            <TextInput
                style={styles.textinput}
                placeholder={"Subject"}
                onChangeText={text => onChangeSubject(text)}
                value={subject}
            />
            <TextInput
                style={styles.bodyinput}
                multiline
                placeholder={"Hello!"}
                onChangeText={text => onChangeBody(text)}
                value={body}
            />
            <Button onPress={() => sendEmail("fake@example.com", subject, body).then(console.log("Email sent!")).catch("Woops! Can't do that")} title="Send Email" />
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
    bodyinput: {
        width: 400,
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
    },
    textinput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    }
});

function sendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;
    let url = `mailto:${to}`;
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }

    const canOpen = Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}
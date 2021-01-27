import * as React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ReviewsScreen({navigation}) {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>REVIEWS</Text>
            <View style={styles.separator} />
            <Text style={styles.title}>Name of This Restroom</Text>
            <View style={styles.separator} />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <View style={styles.separator} />
            <Stars
                default={2.5}
                count={5}
                half={true}
                starSize={50} 
                fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
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
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    }
});
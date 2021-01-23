import * as React from 'react';
import { StyleSheet, Text, Button, ImageBackground, Dimensions, TextInput, View, Linking } from 'react-native';
import SearchIcon from "react-native-bootstrap-icons/icons/search";
import MenuIcon from "react-native-bootstrap-icons/icons/three-dots";

export default function MapScreen({ navigation }) {
    const inputRef = React.useRef();
    const [searchText, onChangeSearchText] = React.useState('');
    return (
        <ImageBackground
            style={styles.map}
            source={require('../assets/mapPlaceholder.png')}
        >
            <View style={styles.container}>
                <View style={styles.menuButton} >
                    <MenuIcon onPress={() => navigation.toggleDrawer()} width="20" height="20" fill="rgb(142, 142, 142)" />
                </View>
                <View style={styles.search}>
                    <TextInput
                        ref={inputRef}
                        id="textInput"
                        style={styles.textinput}
                        placeholder={"Search"}
                        onChangeText={text => onChangeSubject(text)}
                        value={searchText}
                    />
                    <SearchIcon style={styles.searchIcon} onPress={() => inputRef.current.focus()} width="20" height="20" fill="rgb(142, 142, 142)" />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: Dimensions.get('window').height,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textinput: {
        height: 40,
        paddingLeft: 8,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    search: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    searchIcon: {
        margin: 10,
        backgroundColor: '#FFFFFF',
    },
    container: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuButton: {
        marginRight: 20,
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
});

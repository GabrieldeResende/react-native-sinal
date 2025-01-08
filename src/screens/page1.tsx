import { Button, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

import logo from '../../assets/bat-logo.png'

export default function page1({ navigation }: any) {

    function navToPage2() {
        navigation.navigate('page2')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imageLogo} source={logo} />
            <Text style={styles.button} onPress={navToPage2}>Activate bat signal</Text>
            {/* <Button title="Activate bat signal" onPress={navToPage2} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f0f0',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageLogo: {
        width: '70%'
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        padding: 20
    }
})
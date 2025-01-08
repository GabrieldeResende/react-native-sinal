import { Text, View, Image, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import logo from '../../assets/bat-logo.png'

export default function page2() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="teste" />
            <Text style={styles.text}>Label</Text>
            <TextInput style={styles.input} placeholder="Text" />
            <Text style={styles.text}>This is your hint</Text>
            <TextInput placeholder="Your text here" style={[styles.input, styles.inputMultiline]} editable multiline />
            <Text style={styles.text}>Label</Text>
            <TextInput placeholder="Your text here" style={[styles.input, styles.inputMultiline]} editable multiline />
            <Text style={styles.button}>Enviar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        alignItems: 'flex-start',
        padding: 20,
        justifyContent: 'center'
    },
    input: {
        width: '70%',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 10
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        padding: 20,
        width: '80%',
        textAlign: 'center'
    },
    text: {
        marginBottom: 10
    },
    inputMultiline: {
        height: 150
    }
})
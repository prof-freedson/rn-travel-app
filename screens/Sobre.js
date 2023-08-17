import { StyleSheet, View, Text, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons'
import { openBrowserAsync } from 'expo-web-browser'

export default function Sobre() {

    const creditos = "© 2023 - Todos os direitos reservados." +
        "\nDesenvolido por Tecaluga"

    return (
        <View style={styles.container}>
            <Text>Travel App</Text>
            <Text>{creditos}</Text>
            <Pressable onPress={() => openBrowserAsync('https://github.com/prof-freedson/rn-travel-app')}>
                <Feather name="github" size={30} />
            </Pressable>
            <Text>Visite nosso projeto. Toque no gatinho</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
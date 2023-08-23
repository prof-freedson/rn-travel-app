import { StyleSheet, View, Image, Text, Pressable, TextInput } from "react-native"
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";

export default function Login({ navigation }) {
    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageBackground}>
                <Image style={styles.imagemLogin} source={require('../assets/images/natureza.jpg')} />
                <View style={styles.loginContent}>
                    <Text style={{ fontSize: 30, color: '#0c2c39', fontFamily: 'playfair' }}>Bem-vindo(a){'\n'}ao Travel App</Text>
                    <Image style={{ width: 120, height: 120, objectFit: 'contain', marginVertical: 20 }} source={require('../assets/images/travel-app-logo.png')} />
                    <TextInput style={styles.textoInput} placeholder="Seu e-mail" />
                    <TextInput style={styles.textoInput} placeholder="Sua senha" />
                </View>
                <View style={styles.botaoEntrarArea}>
                    <Pressable style={styles.botaoEntrar} onPress={()=> navigation.navigate('inicio')}>
                        <Text style={{ fontWeight: 'bold' }}>ENTRAR</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.links}>
                <Text style={{ fontSize: 16, color: '#2190c4', textDecorationLine: 'underline' }}>Esqueci a senha</Text>
                <Pressable onPress={() => navigation.navigate('cadastro')}>
                    <Text style={{ fontSize: 16, color: '#2190c4' }}>Quer viajar? <Text style={{ fontSize: 16, color: 'white', textDecorationLine: 'underline' }}>Cadastre-se</Text></Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        flex: 8,
    },
    links: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0c2c39',
        paddingVertical: 20,
        height: '25%',
    },
    imagemLogin: {
        objectFit: 'cover',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'orange',

    },
    loginContent: {
        alignItems: 'center',
        paddingTop: 100
    },
    textoInput: {
        color: 'black',
        height: 40,
        width: '75%',
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 5,
        paddingLeft: 15,
        textAlign: 'center'
    },
    botaoEntrarArea: {
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        top: 80,
    },
    botaoEntrar: {
        width: '35%',
        height: 35,
        backgroundColor: '#eacb57',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 5
    },
})
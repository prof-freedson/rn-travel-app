import { StyleSheet, View, TextInput, Text, Pressable, Image } from "react-native";
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons/'

export default function CriarReserva({ navigation }) {
    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: '#1a4252', fontWeight: 'bold', fontFamily: 'playfair' }}>Agendar uma reserva</Text>
            <View style={styles.selecaoViagem}>
                <Pressable onPress={() => navigation.navigate('reservas')}>
                    <View style={styles.cartao}>
                        <View style={styles.icone}>
                            <Image style={{width: 300, height: 120, objectFit: 'cover'}} source={require('../assets/images/ritz-hotel.jpg')}/>
                        </View>
                        <View style={styles.titulo}>
                            <Text style={{ color: 'white' }}>Ritz Hotel - Londres, UK</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
            <View style={styles.formularioViagem}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputTitulo}>
                        <FontAwesome style={styles.iconeInput} name="calendar" size={15} color={'#46a2c7'} />
                        <Text>Data de check-in</Text>
                    </View>
                    <TextInput style={styles.textoInput} />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputTitulo}>
                        <FontAwesome style={styles.iconeInput} name="calendar" size={15} color={'#46a2c7'} />
                        <Text>Data de check-out</Text>
                    </View>
                    <TextInput style={styles.textoInput} />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputTitulo}>
                        <FontAwesome style={styles.iconeInput} name="user" size={15} color={'#46a2c7'} />
                        <Text>Adultos / Crianças</Text>
                    </View>
                    <TextInput style={styles.textoInput} />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputTitulo}>
                        <MaterialIcons style={styles.iconeInput} name="king-bed" size={15} color={'#46a2c7'} />
                        <Text>Quarto</Text>
                    </View>
                    <TextInput style={styles.textoInput} />
                </View>
            </View>
            <Pressable style={styles.botaoCadastrar}>
                <Text style={{ fontWeight: 'bold' }}>RESERVAR</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bce1f1',
        paddingHorizontal: 40
    },
    textoInput: {
        height: 40,
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 5,
        paddingLeft: 15
    },
    botaoCadastrar: {
        height: 30,
        backgroundColor: '#eacb57',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 5
    },
    botaoCancelar: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#eacb57'
    },
    linhaBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    },
    linkLogin: {
        flexDirection: 'row',
        marginTop: 50
    },
    inputContainer: {
        width: '100%'
    },
    iconeInput: {
        marginRight: 10
    },
    inputTitulo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cartao: {
        padding: 10
    },
    icone: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        width: '100%',
        height: 120
    },
    titulo: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#46a2c7',
        width: '100%',
        height: 30,
    },
    selecaoViagem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    formularioViagem: {
        paddingVertical: 20,
        alignItems: 'center',
        width: '100%'
    }
})
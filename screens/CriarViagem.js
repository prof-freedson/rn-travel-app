import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons/'

export default function CriarViagem({ navigation }) {
    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: '#1a4252', fontWeight: 'bold', fontFamily: 'playfair' }}>Marcar uma viagem</Text>
            <View style={styles.selecaoViagem}>
                <Pressable onPress={() => navigation.navigate('reservas')}>
                    <View style={styles.cartao}>
                        <View style={styles.icone}>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#0c2c39' }}>JKT</Text>
                        </View>
                        <View style={styles.titulo}>
                            <Text style={{ color: 'white' }}>JAKARTA</Text>
                        </View>
                    </View>
                </Pressable>
                <MaterialIcons name="sync-alt" size={30} color={'#0c2c39'} />
                <Pressable>
                    <View style={styles.cartao}>
                        <View style={styles.icone}>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#0c2c39' }}>JKT</Text>
                        </View>
                        <View style={styles.titulo}>
                            <Text style={{ color: 'white' }}>JAKARTA</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
            <View style={styles.formularioViagem}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputTitulo}>
                        <FontAwesome style={styles.iconeInput} name="calendar" size={15} color={'#46a2c7'} />
                        <Text>Data de partida</Text>
                    </View>
                    <TextInput style={styles.textoInput} />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputTitulo}>
                        <FontAwesome style={styles.iconeInput} name="calendar" size={15} color={'#46a2c7'} />
                        <Text>Data de chegada</Text>
                    </View>
                    <TextInput style={styles.textoInput} />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputTitulo}>
                        <FontAwesome style={styles.iconeInput} name="user" size={15} color={'#46a2c7'} />
                        <Text>Passageiros</Text>
                    </View>
                    <TextInput style={styles.textoInput} />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputTitulo}>
                        <MaterialIcons style={styles.iconeInput} name="airline-seat-recline-normal" size={15} color={'#46a2c7'} />
                        <Text>Assento</Text>
                    </View>
                    <TextInput style={styles.textoInput} />
                </View>
            </View>
            <Pressable style={styles.botaoCadastrar}>
                <Text style={{ fontWeight: 'bold' }}>AGENDAR</Text>
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
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 120,
        height: 70
    },
    titulo: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#46a2c7',
        width: 120,
        height: 30,
    },
    selecaoViagem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    formularioViagem: {
        paddingVertical: 20,
        alignItems: 'center',
        width: '100%'
    }
})
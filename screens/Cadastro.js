import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";

export default function Cadastro({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: '#1a4252', fontWeight: 'bold' }}>Crie a sua conta</Text>
            <TextInput style={styles.textoInput} placeholder="Seu nome" />
            <TextInput style={styles.textoInput} placeholder="Seu e-mail" />
            <TextInput style={styles.textoInput} placeholder="Seu endereço" />
            <TextInput style={styles.textoInput} placeholder="Seu telefone" />
            <TextInput style={styles.textoInput} placeholder="Crie sua senha" />
            <Text style={{ color: '#46a2c7', marginHorizontal: 50 }}>Sua senha deve conter letras, números e símbolos</Text>
            <Text style={{ color: 'black', marginVertical: 20, marginHorizontal: 50 }}>Ao cadastrar, você estará de acordo com os termos de uso e privacidade</Text>
            <View style={styles.linhaBotoes}>
                <Pressable style={styles.botaoCadastrar}>
                    <Text style={{ fontWeight: 'bold' }}>CADASTRAR</Text>
                </Pressable>
                <Text>ou</Text>
                <Pressable style={styles.botaoCancelar}>
                    <Text style={{ fontWeight: 'bold' }}>CANCELAR</Text>
                </Pressable>
            </View>
            <View style={styles.linkLogin}>
                <Text>Já é cadastrado? </Text>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={{ color: '#46a2c7', textDecorationLine: 'underline' }}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bce1f1'
    },
    textoInput: {
        height: 40,
        width: '75%',
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
    }
})
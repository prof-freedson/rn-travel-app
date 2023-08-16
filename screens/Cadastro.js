import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";

export default function Cadastro(){
    return(
        <View>
            <Text>Crie a sua conta</Text>
            <TextInput style={styles.textoInput} placeholder="Seu nome"/>
            <TextInput style={styles.textoInput} placeholder="Seu e-mail"/>
            <TextInput style={styles.textoInput} placeholder="Seu endereço"/>
            <TextInput style={styles.textoInput} placeholder="Seu telefone"/>
            <TextInput style={styles.textoInput} placeholder="Crie sua senha"/>
            <Text>Sua senha deve conter letras, números e símbolos</Text>
            <Text>Ao cadastrar, você estará de acordo com os termos de uso e privacidade</Text>
            <Pressable>
                <Text>Cadastrar</Text>
            </Pressable>
            <Text>ou</Text>
            <Pressable>
                <Text>Cancelar</Text>
            </Pressable>
            <Text>Já é cadastrado?</Text>
            <Text>Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})
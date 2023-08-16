import { StyleSheet, View, Image, Text } from "react-native"

export default function Login(){
    return(
        <View>
            <Image style={styles.imagemLogin} source={require('../assets/natureza.jpg')} />
            <View style={styles.links}>
                <Text style={{color: 'white', textDecorationLine: 'underline'}}>Esqueci a senha</Text>
                <Text style={{color: 'white', textDecorationLine: 'underline'}}>Cadastre-se</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    links:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a4252'
    },
    imagemLogin: {
        flex: 3,
    }
})
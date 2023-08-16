import { StyleSheet, View, Image, Text, ImageBackground } from "react-native"

export default function Login(){
    return(
        <View>
            
            <View>
                <ImageBackground style={styles.imagemLogin} resizeMode="cover" source={require('../assets/natureza.jpg')} />
            </View>
            <View style={styles.links}>
                <Text style={{color: 'white', textDecorationLine: 'underline'}}>Esqueci a senha</Text>
                <Text style={{color: 'white', textDecorationLine: 'underline'}}>Cadastre-se</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    links:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a4252',
        paddingVertical: 40,
        height: '25%',
    },
    imagemLogin: {
        height: '75%',
        backgroundColor: 'orange',
        
    }
})
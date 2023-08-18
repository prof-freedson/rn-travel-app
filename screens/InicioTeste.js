import { StyleSheet, View, Image, Text } from "react-native";
import { Feather } from '@expo/vector-icons'

export default function InicioTeste() {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image style={styles.imagem} source={require('../assets/images/natureza.jpg')} />
            </View>
            <View style={styles.area}>
                <View style={styles.safeCardArea}>
                    <View style={styles.cartao}>
                        <View style={styles.icone}>
                            <Feather name="send" size={35} />
                        </View>
                        <View style={styles.titulo}>
                            <Text >Viagens</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        flex: 2,
        backgroundColor: 'yellow'
    },
    area: {
        flex: 3,
        backgroundColor: '#0c2c39'
    },
    imagem: {
        objectFit: 'contain',
        position: 'relative',
        left: -140,
        bottom: 20
    },
    cartao: {
    },
    safeCardArea: {
        padding: 40,
    },
    icone: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 100,
        height: 80
    },
    titulo: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eacb57',
        width: 100,
        height: 30,
    }
})
import { StyleSheet, View, Image, Text, Pressable, ScrollView } from "react-native";
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons'

export default function Inicio() {
    const [fontsLoaded] = useFonts({
        'Times-New-Roman': require('../assets/fonts/Times-New-Roman.ttf'),
    });



    return (
        <View>
            <View style={styles.bannerTop}>

                <Image style={styles.bannerNaturezaTop} source={require('../assets/images/natureza.jpg')} />
                <View style={styles.bannerLogoTop}>
                    <Image style={{ height: 120, width: 120, paddingHorizontal: 20, paddingVertical: 20, objectFit: 'contain' }} source={require('../assets/images/travel-app-logo.png')} />
                    <Text style={styles.bannerTextTop}>Bem vindo(a),{'\n'}Karina!</Text>
                </View>
            </View>
            <View style={styles.cardArea}>
                <View style={styles.cardIcone}>
                    <Feather name="send" size={40} color={'#2596be'} />
                </View>
                <View>
                    <Text style={styles.cardNome}>Viagens</Text>
                </View>
                <View style={styles.destinosArea}>
                    <Text style={{ marginLeft: 50, color: 'white' }}>Destinos populares</Text>
                    <View style={styles.destinosBotoes}>
                        <Pressable style={styles.destinoItem}>
                            <Text style={{ color: 'white' }}>Dubai, Asia</Text>
                        </Pressable>
                        <Pressable style={styles.destinoItem}>
                            <Text style={{ color: 'white' }}>London, UK</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bannerNaturezaTop: {
        height: '78%',
        position: 'relative',
        left: -100

    },
    bannerLogoTop: {
        position: "absolute",
        top: '25%',
        left: '10%'

    },
    bannerTextTop: {
        fontSize: 35,
        color: 'white',
        fontFamily: 'Times-New-Roman',
        fontWeight: 'bold'
    },
    cardArea: {
        position: "relative",
        top: -100,
        paddingVertical: 50,
        backgroundColor: '#1a4252'
    },
    cardIcone: {
        backgroundColor: 'white',
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    cardNome: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eacb57',
        width: 80,
        paddingVertical: 2,
        textAlign: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    destinoItem: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 40,
        width: 120,
        paddingHorizontal: 10,
        backgroundColor: '#46a2c7'
    },
    destinosBotoes: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    }
})
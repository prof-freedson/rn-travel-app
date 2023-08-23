import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { FontAwesome, MaterialIcons, Foundation } from '@expo/vector-icons/'
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";

export default function InicioTeste({ navigation }) {

    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }



    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image style={styles.imagem} source={require('../assets/images/natureza.jpg')} />
                <View style={styles.welcome}>
                    <Image source={require('../assets/images/travel-app-logo.png')} style={{ width: 130, height: 130, objectFit: 'contain' }} />
                    <Text style={{ color: 'white', fontSize: 35, fontFamily: 'playfair' }}>Seja-bem vindo(a),{'\n'}Karina!</Text>
                </View>
            </View>
            <View style={styles.area}>
                <View style={styles.safeCardArea}>
                    <Pressable onPress={() => navigation.navigate('viagens')}>
                        <View style={styles.cartao}>
                            <View style={styles.icone}>
                                <FontAwesome name="plane" size={55} color='#46a2c7' />
                            </View>
                            <View style={styles.titulo}>
                                <Text >Viagens</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('reservas')}>
                        <View style={styles.cartao}>
                            <View style={styles.icone}>
                                <MaterialIcons name='single-bed' size={70} color='#46a2c7' />
                            </View>
                            <View style={styles.titulo}>
                                <Text >Hotéis</Text>
                            </View>
                        </View>
                    </Pressable>
                    <View style={styles.cartao}>
                        <View style={styles.icone}>
                            <Foundation name='map' size={50} color='#46a2c7' />
                        </View>
                        <View style={styles.titulo}>
                            <Text >Destinos</Text>
                        </View>
                    </View>
                    <View style={styles.cartao}>
                        <View style={styles.icone}>
                            <MaterialIcons name='restaurant' size={55} color='#46a2c7' />
                        </View>
                        <View style={styles.titulo}>
                            <Text >Restaurantes</Text>
                        </View>
                    </View>
                    <Pressable onPress={() => navigation.navigate('sobre')}>
                        <View style={styles.cartao}>
                            <View style={styles.icone}>
                                <MaterialIcons name='info-outline' size={55} color='#46a2c7' />
                            </View>
                            <View style={styles.titulo}>
                                <Text >Sobre o app</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.destinosArea}>
                        <Text style={{color: 'white' }}>Destinos populares</Text>
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
    container: {
        flex: 1
    },
    banner: {
        flex: 2,
        backgroundColor: 'yellow'
    },
    area: {
        flex: 3,
        backgroundColor: '#0c2c39',
        position: 'relative'
    },
    welcome: {
        position: 'absolute',
        top: 60,
        left: 20,
    },
    imagem: {
        objectFit: 'contain',
        position: 'relative',
        left: -140,
        bottom: 20
    },
    cartao: {
        padding: 10
    },
    safeCardArea: {
        paddingVertical: 40,
        paddingHorizontal: 15,
        flexDirection: 'row',
        flexWrap: 'wrap'
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
    },
    destinosArea: {
        paddingHorizontal: 30,
        width: '100%',
        left: 0
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
        justifyContent: 'space-between',
    }
})
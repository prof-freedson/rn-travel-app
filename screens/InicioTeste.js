import { StyleSheet, View, Image, Text } from "react-native";
import { FontAwesome, MaterialIcons, Foundation } from '@expo/vector-icons/'
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";

export default function InicioTeste() {

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
                    <Text style={{color: 'white', fontSize: 35}}>Seja-bem vindo(a),{'\n'}Karina!</Text>
                </View>
            </View>
            <View style={styles.area}>
                <View style={styles.safeCardArea}>
                    <View style={styles.cartao}>
                        <View style={styles.icone}>
                            <FontAwesome name="plane" size={55} color='#46a2c7'  />
                        </View>
                        <View style={styles.titulo}>
                            <Text >Viagens</Text>
                        </View>
                    </View>
                    <View style={styles.cartao}>
                        <View style={styles.icone}>
                            <MaterialIcons name='single-bed' size={70} color='#46a2c7' />
                        </View>
                        <View style={styles.titulo}>
                            <Text >Hotéis</Text>
                        </View>
                    </View>
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
        top: 70,
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
    }
})
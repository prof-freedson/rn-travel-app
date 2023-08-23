import { StyleSheet, View, Text, Pressable, Image, ScrollView } from "react-native";
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";

export default function Reservas({ navigation }) {
    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: '#1a4252', fontWeight: 'bold', fontFamily: 'playfair' }}>Minhas reservas</Text>
            <ScrollView style={{ height: '100%' }}>
                <View style={styles.cartaoReserva}>
                    <View style={styles.cartaoReservaSup}>
                        <View style={styles.cartaoReservaTitulo}>
                            <View style={{ justifyContent: 'space-around', height: 70 }}>
                                <Text><Text style={{ fontSize: 20, fontWeight: 'bold' }}>The Ritz Hotel</Text>{'\n'}Londres, UK</Text>
                                <Text>01/01/2023 a 04/01/2023</Text>
                            </View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>$899</Text>
                        </View>
                    </View>
                    <View style={styles.cartaoReservaInf}>
                        <Image style={{ width: 350, objectFit: 'cover' }} source={require('../assets/images/ritz-hotel.jpg')} />
                    </View>
                </View>
                <View style={styles.cartaoReserva}>
                    <View style={styles.cartaoReservaSup}>
                        <View style={styles.cartaoReservaTitulo}>
                            <View style={{ justifyContent: 'space-around', height: 70 }}>
                                <Text><Text style={{ fontSize: 20, fontWeight: 'bold' }}>The Ritz Hotel</Text>{'\n'}Londres, UK</Text>
                                <Text>01/01/2023 a 04/01/2023</Text>
                            </View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>$899</Text>
                        </View>
                    </View>
                    <View style={styles.cartaoReservaInf}>
                        <Image style={{ width: 350, objectFit: 'cover' }} source={require('../assets/images/ritz-hotel.jpg')} />
                    </View>
                </View>
                <View style={styles.cartaoReserva}>
                    <View style={styles.cartaoReservaSup}>
                        <View style={styles.cartaoReservaTitulo}>
                            <View style={{ justifyContent: 'space-around', height: 70 }}>
                                <Text><Text style={{ fontSize: 20, fontWeight: 'bold' }}>The Ritz Hotel</Text>{'\n'}Londres, UK</Text>
                                <Text>01/01/2023 a 04/01/2023</Text>
                            </View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>$899</Text>
                        </View>
                    </View>
                    <View style={styles.cartaoReservaInf}>
                        <Image style={{ width: 350, objectFit: 'cover' }} source={require('../assets/images/ritz-hotel.jpg')} />
                    </View>
                </View>
                <View style={styles.cartaoReserva}>
                    <View style={styles.cartaoReservaSup}>
                        <View style={styles.cartaoReservaTitulo}>
                            <View style={{ justifyContent: 'space-around', height: 70 }}>
                                <Text><Text style={{ fontSize: 20, fontWeight: 'bold' }}>The Ritz Hotel</Text>{'\n'}Londres, UK</Text>
                                <Text>01/01/2023 a 04/01/2023</Text>
                            </View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>$899</Text>
                        </View>
                    </View>
                    <View style={styles.cartaoReservaInf}>
                        <Image style={{ width: 350, objectFit: 'cover' }} source={require('../assets/images/ritz-hotel.jpg')} />
                    </View>
                </View>
                <View style={styles.cartaoReserva}>
                    <View style={styles.cartaoReservaSup}>
                        <View style={styles.cartaoReservaTitulo}>
                            <View style={{ justifyContent: 'space-around', height: 70 }}>
                                <Text><Text style={{ fontSize: 20, fontWeight: 'bold' }}>The Ritz Hotel</Text>{'\n'}Londres, UK</Text>
                                <Text>01/01/2023 a 04/01/2023</Text>
                            </View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>$899</Text>
                        </View>
                    </View>
                    <View style={styles.cartaoReservaInf}>
                        <Image style={{ width: 350, objectFit: 'cover' }} source={require('../assets/images/ritz-hotel.jpg')} />
                    </View>
                </View>
                <View style={styles.cartaoReserva}>
                    <View style={styles.cartaoReservaSup}>
                        <View style={styles.cartaoReservaTitulo}>
                            <View style={{ justifyContent: 'space-around', height: 70 }}>
                                <Text><Text style={{ fontSize: 20, fontWeight: 'bold' }}>The Ritz Hotel</Text>{'\n'}Londres, UK</Text>
                                <Text>01/01/2023 a 04/01/2023</Text>
                            </View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>$899</Text>
                        </View>
                    </View>
                    <View style={styles.cartaoReservaInf}>
                        <Image style={{ width: 350, objectFit: 'cover' }} source={require('../assets/images/ritz-hotel.jpg')} />
                    </View>
                </View>
                <View style={styles.cartaoReserva}>
                    <View style={styles.cartaoReservaSup}>
                        <View style={styles.cartaoReservaTitulo}>
                            <View style={{ justifyContent: 'space-around', height: 70 }}>
                                <Text><Text style={{ fontSize: 20, fontWeight: 'bold' }}>The Ritz Hotel</Text>{'\n'}Londres, UK</Text>
                                <Text>01/01/2023 a 04/01/2023</Text>
                            </View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>$899</Text>
                        </View>
                    </View>
                    <View style={styles.cartaoReservaInf}>
                        <Image style={{ width: 350, objectFit: 'cover' }} source={require('../assets/images/ritz-hotel.jpg')} />
                    </View>
                </View>
            </ScrollView>
            <Pressable style={styles.botaoReserva} onPress={() => navigation.navigate('criarreserva')}>
                <Text>AGENDAR NOVA RESERVA</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#bce1f1',
        padding: 20
    },
    botaoReserva: {
        width: '100%',
        height: 35,
        backgroundColor: '#eacb57',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 5
    },
    cartaoReservaTitulo: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cartaoReservaSup: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: 350,
        height: 80,
        backgroundColor: '#f9d04c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartaoReserva: {
        paddingVertical: 10
    }
})
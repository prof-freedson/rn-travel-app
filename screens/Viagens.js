import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";
import { MaterialIcons} from '@expo/vector-icons/'

export default function Viagens({ navigation }) {
    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: '#1a4252', fontFamily: 'playfair' }}>Minhas viagens</Text>
            <ScrollView style={{ height: '100%' }}>
                <View style={styles.cartaoViagem}>
                    <View style={styles.cartaoViagemSup}>
                        <View style={styles.cartaoViagemDataHora}>
                            <View style={styles.cartaoViagemData}>
                                <Text>Sábado</Text>
                                <Text>31/12/2022</Text>
                            </View>
                            <Text style={{fontSize: 18}}>22h00min</Text>
                        </View>
                        <Text style={{fontSize: 40, fontWeight: 'bold', color: '#0c2c3a'}}>J-1362073FCR</Text>
                    </View>
                    <View style={styles.cartaoViagemInf}>
                        <MaterialIcons style={{marginRight: 10}} name="push-pin" color={'#f9d04c'} size={25}/>
                        <Text style={{color: 'white'}}>
                            Aeroporto de Congonhas (CGH){'\n'}São Paulo, SP
                        </Text>
                    </View>
                </View>
                <View style={styles.cartaoViagem}>
                    <View style={styles.cartaoViagemSup}>
                        <View style={styles.cartaoViagemDataHora}>
                            <View style={styles.cartaoViagemData}>
                                <Text>Sábado</Text>
                                <Text>31/12/2022</Text>
                            </View>
                            <Text style={{fontSize: 18}}>22h00min</Text>
                        </View>
                        <Text style={{fontSize: 40, fontWeight: 'bold', color: '#0c2c3a'}}>J-1362073FCR</Text>
                    </View>
                    <View style={styles.cartaoViagemInf}>
                        <MaterialIcons style={{marginRight: 10}} name="push-pin" color={'#f9d04c'} size={25}/>
                        <Text style={{color: 'white'}}>
                            Aeroporto de Congonhas (CGH){'\n'}São Paulo, SP
                        </Text>
                    </View>
                </View>
                <View style={styles.cartaoViagem}>
                    <View style={styles.cartaoViagemSup}>
                        <View style={styles.cartaoViagemDataHora}>
                            <View style={styles.cartaoViagemData}>
                                <Text>Sábado</Text>
                                <Text>31/12/2022</Text>
                            </View>
                            <Text style={{fontSize: 18}}>22h00min</Text>
                        </View>
                        <Text style={{fontSize: 40, fontWeight: 'bold', color: '#0c2c3a'}}>J-1362073FCR</Text>
                    </View>
                    <View style={styles.cartaoViagemInf}>
                        <MaterialIcons style={{marginRight: 10}} name="push-pin" color={'#f9d04c'} size={25}/>
                        <Text style={{color: 'white'}}>
                            Aeroporto de Congonhas (CGH){'\n'}São Paulo, SP
                        </Text>
                    </View>
                </View>
                <View style={styles.cartaoViagem}>
                    <View style={styles.cartaoViagemSup}>
                        <View style={styles.cartaoViagemDataHora}>
                            <View style={styles.cartaoViagemData}>
                                <Text>Sábado</Text>
                                <Text>31/12/2022</Text>
                            </View>
                            <Text style={{fontSize: 18}}>22h00min</Text>
                        </View>
                        <Text style={{fontSize: 40, fontWeight: 'bold', color: '#0c2c3a'}}>J-1362073FCR</Text>
                    </View>
                    <View style={styles.cartaoViagemInf}>
                        <MaterialIcons style={{marginRight: 10}} name="push-pin" color={'#f9d04c'} size={25}/>
                        <Text style={{color: 'white'}}>
                            Aeroporto de Congonhas (CGH){'\n'}São Paulo, SP
                        </Text>
                    </View>
                </View>
                <View style={styles.cartaoViagem}>
                    <View style={styles.cartaoViagemSup}>
                        <View style={styles.cartaoViagemDataHora}>
                            <View style={styles.cartaoViagemData}>
                                <Text>Sábado</Text>
                                <Text>31/12/2022</Text>
                            </View>
                            <Text style={{fontSize: 18}}>22h00min</Text>
                        </View>
                        <Text style={{fontSize: 40, fontWeight: 'bold', color: '#0c2c3a'}}>J-1362073FCR</Text>
                    </View>
                    <View style={styles.cartaoViagemInf}>
                        <MaterialIcons style={{marginRight: 10}} name="push-pin" color={'#f9d04c'} size={25}/>
                        <Text style={{color: 'white'}}>
                            Aeroporto de Congonhas (CGH){'\n'}São Paulo, SP
                        </Text>
                    </View>
                </View>
                <View style={styles.cartaoViagem}>
                    <View style={styles.cartaoViagemSup}>
                        <View style={styles.cartaoViagemDataHora}>
                            <View style={styles.cartaoViagemData}>
                                <Text>Sábado</Text>
                                <Text>31/12/2022</Text>
                            </View>
                            <Text style={{fontSize: 18}}>22h00min</Text>
                        </View>
                        <Text style={{fontSize: 40, fontWeight: 'bold', color: '#0c2c3a'}}>J-1362073FCR</Text>
                    </View>
                    <View style={styles.cartaoViagemInf}>
                        <MaterialIcons style={{marginRight: 10}} name="push-pin" color={'#f9d04c'} size={25}/>
                        <Text style={{color: 'white'}}>
                            Aeroporto de Congonhas (CGH){'\n'}São Paulo, SP
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <Pressable style={styles.botaoViagem} onPress={() => navigation.navigate('criarviagem')}>
                <Text>AGENDAR NOVA VIAGEM</Text>
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
    botaoViagem: {
        width: '100%',
        height: 35,
        backgroundColor: '#eacb57',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10
    },
    cartaoViagem:{
        marginVertical: 10
    },
    cartaoViagemSup: {
        paddingVertical: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white',
        width: 350,
        alignItems: 'center',
    },
    cartaoViagemDataHora: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        width: 350,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cartaoViagemInf: {
        flexDirection: 'row',
        backgroundColor: '#0c2c3a',
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignItems: 'flex-start',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
})
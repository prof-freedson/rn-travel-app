import { StyleSheet, View, Image, Text } from "react-native";

export default function Inicio() {
    return (
        <View>
            <View style={styles.bannerTop}>

                <Image style={styles.bannerNaturezaTop} source={require('../assets/natureza.jpg')} />
                <View style={styles.bannerLogoTop}>
                    <Image style={{height: 120, width: 120, paddingHorizontal: 20, paddingVertical: 20, objectFit: 'contain'}} source={require('../assets/travel-app-logo.png')} />
                    <Text style={styles.bannerTextTop}>Bem vindo(a),{'\n'}Karina!</Text>
                </View>

                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bannerNaturezaTop: {
        height: '78%',
        
    },
    bannerLogoTop: {
        position: "absolute",
        top: '25%',
        left: '10%'

    },
    bannerTextTop: {
        fontSize: 35,
        color: 'white'
    }
})
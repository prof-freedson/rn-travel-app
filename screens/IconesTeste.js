/* Passo 1 para instalação do Font Awesome: comando do @fortawesome/react-native-fontawesome para instalaçao?
npm install @fortawesome/react-native-fontawesome.
Passo 2: npm install react-native-navigation.
Passo 3: npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
Passo 5: npm i -S @fortawesome/free-regular-svg-icons
Passo 6: npm i react-icons
Passo 7: npm i react-native-fontawesome
Passo 8: npm install react-native-vector-icons
Passo 9: npm install @react-navigation/native
Passo 10: npm i -S @fortawesome/free-brands-svg-icons
Passo 11: npm i -S @fortawesome/free-solid-svg-icons  */

import React from "react";
import { Pressable } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"; 
import { faUserMd, faMicroscope, faUserDoctor } from '@fortawesome/free-solid-svg-icons';


export default function({ navigation }){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Consultas & Exames</Text>
            <View >
                <View style={styles.linhaBotao}>
                    <Pressable style={styles.button}  onPress={() => navigation.navigate("consulta")}>
                    <FontAwesomeIcon icon={faUserDoctor} size={40} style={styles.iconM2} />
                    <Text>Consultas</Text>
                </Pressable>
                
                <Pressable style={styles.button} onPress={() => navigation.navigate("exame")}>
                <FontAwesomeIcon icon={faMicroscope} size={40} style={styles.icon} />
                    <Text>Exames</Text>
                </Pressable></View>
                
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginVertical: 10,
        alignItems:'center'
      
    },
    tex: {
        fontSize: 15,
        marginVertical: 30


    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        zIndex: 1,
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderWidth: 1,
        marginVertical: 60,
        justifyContent: 'center',
        height: 200,
        width: '45%',
        borderRadius: 4,
        alignItems: 'center',
        padding: 10
        
        
    },
    linhaBotao: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    iconM1: {
        color: 'red',
        marginRight: 1,
        justifyContent: 'center'
      },
      iconM2: {
        color: 'red',
        marginRight: 10,
        justifyContent: 'center'
      },
    });
    

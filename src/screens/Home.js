import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import TarefaItem from './Tarefaitem';
import { useState } from 'react';
export default function Home(){


    return (
        <View style={styles.container}>

            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>ABRIL/2025</Text>
                <View style={styles.icone}></View>
            </View>

            <ScrollView style={styles.body}>
                
                <TarefaItem
                    nome= "Tarefa 1"
                    status= "a cumprir"
                    data= "24/04/2025"
                    categoria="reunião"
                />
                  <TarefaItem
                    nome= "Tarefa 2"
                    status= "concluido"
                    data= "24/04/2088"
                    categoria="estudo"
                />
                 <TarefaItem
                    nome= "Tarefa 2"
                    status= "concluido"
                    data= "24/04/2088"
                    categoria="estudo"
                />
                 <TarefaItem
                    nome= "Tarefa 2"
                    status= "concluido"
                    data= "24/04/2088"
                    categoria="estudo"
                />
                 <TarefaItem
                    nome= "Tarefa 2"
                    status= "concluido"
                    data= "24/04/2088"
                    categoria="estudo"
                />
                 <TarefaItem
                    nome= "Tarefa 2"
                    status= "concluido"
                    data= "24/04/2088"
                    categoria="estudo"
                />
                
            </ScrollView>
            <TouchableOpacity
                onPress={() => {
                    alert("Olá!")
                }}
                
                style={styles.botaoAdcionar}>
                    <Text style={styles.botaoMais}>+</Text>
                </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 20,
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    icone: {
        backgroundColor: 'indigo',
        width: 40,
        height: 40,
        borderRadius: 20,
        right: 15,
        position: 'absolute'
    },
    body: {
        flex: 1
    },
    botaoAdcionar: {
        backgroundColor: 'blue',
        width: 60,
        height: 60,
        borderRadius: 30,
        right: 20,
        position: 'absolute',
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoMais: {
        color: 'white',
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: -15
    }
});

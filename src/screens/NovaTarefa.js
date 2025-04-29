import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function NovaTarefa() {
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <View style={styles.Container}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}> Adicionar Tarefa </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.texto}> Nome da Tarefa</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui..."
                />

                <Text style={styles.label}>Selecione uma categoria:</Text>
                <Picker
                    selectedValue={selectedOption}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedOption(itemValue)}
                >
                    <Picker.Item label="Escolha..." value="" />
                    <Picker.Item label="Opção 1" value="opcao1" />
                    <Picker.Item label="Opção 2" value="opcao2" />
                    <Picker.Item label="Opção 3" value="opcao3" />
                </Picker>
                <Text style={styles.desc}> Descrição da Tarefa: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui..."
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: "blue",
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    
    titulo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    body: {
        padding: 15
    },
    texto: {
        fontSize: 16,
        marginBottom: 15
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    label: {
        marginTop: 15,
        fontSize: 16,
    },
    picker: {
        borderWidth: 1,
        height: 50,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        borderColor:'black'
    },
    desc:{
        padding: 10,
        fontSize: 16,

    }
});

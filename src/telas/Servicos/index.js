import React from "react";

import { Text, SafeAreaView, StatusBar, FlatList } from 'react-native';
import Item from './item';

const servicos = [
    {
        id: 1,
        nome:"Banho",
        preco: 79.90,
        descricao: "NÃO DE BANHO NO SEU GATO!, Mas se precisar nós damos", 
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. seu gato precisa tomar de duas"
    },
    {
        id: 3,
        nome: "Vacina Antirabica",
        preco: 99.9,
        descricao: " Uma dose da vacina antirrábica,Seu gato precisa de uma por ano."
    }
];


export default function Servicos(){
    return <SafeAreaView>
        <StatusBar />
        <Text>Serviços!</Text>
        <FlatList
            data={servicos}
            renderItem={ ({item}) => <Item {...item}/> }
            keyExtractor={({id}) =>String(id)}
        />
    </SafeAreaView>
}
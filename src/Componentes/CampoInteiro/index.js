import React from "react";
import { TextInput } from "react-native";
import estilos from "../../estilos";
import estiloscampos from "./estiloscampos";

export default function CampoInteiro({valor, estilos, acao}){
    const atualiza = (novoValor, acaoretorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if(!verificaInteiro) return;

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2')

        acaoretorno(removeZeroEsquerda);
    }

    const numeroEmTexto = String(valor);

    return <TextInput 
        style = {[estiloscampos.campo, estilos]}
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(novoValor) => {atualiza(novoValor, acao)}}
        value ={numeroEmTexto}
    />
}
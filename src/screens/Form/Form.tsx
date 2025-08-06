import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import { styles,  } from './FormStyle';
import batSinal from "../../../assets/bat-sinal.png";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export function Form({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={batSinal} style={styles.Imagem}></Image>
      </View>
        <View style={styles.formfield}>
            <Text style={styles.texto}>Nome</Text>
            <TextInput style={styles.TextForm}></TextInput>
        </View >
           <View style={styles.formfield}>
            <Text style={styles.texto}>Telefone</Text>
            <TextInput style={styles.TextForm}></TextInput>
        </View >
           <View style={styles.formfield}>
            <Text style={styles.texto}>Localização</Text>
            <TextInput style={styles.TextForm}></TextInput>
        </View >
           <View style={styles.formfield}>
            <Text style={styles.texto}>Observação</Text>
            <TextInput style={styles.obervation}></TextInput>
        </View>
        <View style={styles.caixaBotaoEnviar}>
          <Text style={styles.botaoEnviar}>Enviar Bat Sinal</Text>
        </View>
        <View style={styles.caixaBotaoVoltar}>
          <Pressable onPress={() => navigation.navigate('Home')}>
             <Text style={styles.botaoEnviar}>Voltar</Text>
          </Pressable>
        </View>
    </View>
  );
}
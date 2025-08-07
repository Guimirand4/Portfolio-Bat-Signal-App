import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';
import { View, Text, TextInput, Image, Pressable, Alert } from 'react-native';
import { styles,  } from './FormStyle';
import batSinal from "../../../assets/bat-sinal.png";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const handlePress = () => {
    Alert.alert(
      'Bat sinal enviado ⚠️🦇',
      'O Batman está indo te ajudar!',
      [
        { text: 'OK', onPress: () => console.log('') }
      ]
    );
  }

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
        
            <Text style={styles.botaoEnviar}
              onPress={handlePress}
              onPressOut={() => navigation.navigate('Home')}>
              Enviar Bat Sinal
              </Text>
           
        </View>
        <View style={styles.caixaBotaoVoltar}>
          <Pressable onPress={() => navigation.navigate('Home')}>
             <Text style={styles.botaoEnviar}>Voltar</Text>
          </Pressable>
        </View>
    </View>
  );
}
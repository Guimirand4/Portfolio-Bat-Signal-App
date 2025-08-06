import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';
import { View, Image } from 'react-native';
import batSinal from "../../../assets/bat-sinal.png";
import { BatButton } from '../../components/BatButton/BatButtonInicial';


type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

import { styles } from './Style';

export function Home({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
        <Image source={batSinal} style={styles.logo} />
        <View style={styles.button}>
            <BatButton navigation={navigation}/>
        </View>
    </View>
    
  );
}
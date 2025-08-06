import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles,  } from './FormStyle';

export function Form() {
  return (
    <View style={styles.container}>
        <View style={styles.formfield}>
            <Text>Nome</Text>
            <TextInput style={styles.TextForm}></TextInput>
        </View >
           <View style={styles.formfield}>
            <Text>Telefone</Text>
            <TextInput style={styles.TextForm}></TextInput>
        </View >
           <View style={styles.formfield}>
            <Text>Localização</Text>
            <TextInput style={styles.TextForm}></TextInput>
        </View >
           <View style={styles.formfield}>
            <Text>Observação</Text>
            <TextInput style={styles.TextForm}></TextInput>
        </View>
    </View>
  );
}
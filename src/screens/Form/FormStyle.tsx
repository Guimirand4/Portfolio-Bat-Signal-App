import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'grey',
  },
  texto:{
    fontSize: 17,

  },
  TextForm:{
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,  
    marginTop: 10,
  },
  obervation:{
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingBottom: 40,  
    marginTop: 10,
  },
  formfield: {
    padding: 15,
  },
  botaoEnviar: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  caixaBotaoEnviar: {
    marginTop: 20,
    alignItems: 'center',
  },
  caixaBotaoVoltar: {
    marginTop: -10,
    alignItems: 'center',
  }
});
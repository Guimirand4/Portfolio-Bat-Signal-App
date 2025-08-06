import { View, Text, Pressable } from 'react-native';
import { styles } from './BatButtonInicialStyle';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';

type BatButtonProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};


export function BatButton({ navigation}: BatButtonProps) {
  return (
    <View>
        <Pressable onPress={() => navigation.navigate('Form')}>
            <Text style={styles.button}
                >Activate Bat Signal</Text>
         </Pressable>
    </View>
  );
}
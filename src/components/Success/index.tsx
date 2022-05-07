//SUCCESS COMPONENT

//IMPORTING
//REACT/REACT-NATIVE
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
//ASSETS
import successImg from '../../assets/success.png';
//COMPONENTS
import { Copyright } from '../Copyright';
import { styles } from './styles';

interface Props{
    onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props ) {
  return (
    <View style={styles.container}>
        <Image
            source={successImg}
            style={styles.image}
        />
        <Text style={styles.title}>
            Thank you for giving us your feedback!
        </Text>
        <TouchableOpacity
        onPress={onSendAnotherFeedback}
        style={styles.button}        
        >
            <Text style={styles.buttonTitle}>
                Wanna send another one?
            </Text>
        </TouchableOpacity>
        <Copyright />
    </View>
  );
}

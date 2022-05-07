//COPYRIGHT COMPONENT

//IMPORTING
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Copyright() {
  return (
    <View>
        <Text style={styles.text}>
            Created by @Test
        </Text>
    </View>
  );
}

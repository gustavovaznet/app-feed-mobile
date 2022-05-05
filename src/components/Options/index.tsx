import React from 'react';
import { View, Text } from 'react-native';
import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { styles } from './styles';
import { Value } from 'react-native-reanimated';

export function Options() {
  return (
    <View style={styles.container}>
      <Text>
        Give us you feedback
      </Text>
      <View style={styles.options}>
        {
          Object
          .entries(feedbackTypes)
          .map(([key, value]) => (
            <Option
              key={key}
              title={value.title}
              image={value.image}
            />
          ))
        }
      </View>
      <Copyright />
    </View>
  );
}
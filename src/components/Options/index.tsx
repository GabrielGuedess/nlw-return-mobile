import React from 'react';
import { View, Text } from 'react-native';

import { Option } from '../Option';
import { Copyright } from '../Copyright';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { styles } from './styles';
import { FeedBackType } from '../Widget';

interface Props {
  onFeedbackChanged: (feedbackType: FeedBackType) => void;
}

export function Options({ onFeedbackChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu FeedBack</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackChanged(key as FeedBackType)}
          />
        ))}
      </View>

      <Copyright />
    </View>
  );
}

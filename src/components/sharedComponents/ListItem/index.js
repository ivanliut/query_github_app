import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { noop } from '../../../utils/noop';

import styles from './styles';

const ListItem = ({ onPress = noop, title = '', subtitle = '' }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

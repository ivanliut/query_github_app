import React from 'react';
import { View, Text, Switch } from 'react-native';

import styles from './styles';

const Chooser = ({ value = false, onChange = () => {}, label = '', disabled = false, containerStyle = {} }) => {
  return (
    <View style={[styles.root, containerStyle]}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={value}
        disabled={disabled}
      />
    </View>
  );
};

export default Chooser;

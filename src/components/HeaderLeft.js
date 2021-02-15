import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MoveMoneyConfirmPage = ({ onPress }) => {
  return (
    <View
      style={{
        marginLeft: 10,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text>{'< Go Back'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoveMoneyConfirmPage;

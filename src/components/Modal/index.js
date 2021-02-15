import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Animated, Easing } from 'react-native';
import { WebView } from 'react-native-webview';

import { colorsMap } from '../../styles/colorsMap';
import { setFullScreenModal } from '../../redux/app/actions';
import { selectIsFullScreenModal, selectWebViewUrl } from '../../redux/app/selectors';
import { useValueObserver } from '../../hooks/useValueObserver';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const Modal = () => {
  const dispatch = useDispatch();
  const isFullScreenModal = useSelector(selectIsFullScreenModal);
  const url = useSelector(selectWebViewUrl);

  useValueObserver((isModalTriggered) => {
    isModalTriggered && startAnimation();
  }, isFullScreenModal);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const performAnimation = (toValue) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 700,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const startAnimation = () => {
    performAnimation(1);
  };

  const finishAnimation = () => {
    performAnimation(0);
  };

  return (
    <Animated.View
      style={[
        {
          ...StyleSheet.absoluteFill,
          backgroundColor: colorsMap.blackOneOpacity,
          alignItems: 'center',
          justifyContent: 'center',
        },
        {
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [screenHeight, 0],
              }),
            },
          ],
        },
        {
          opacity: animatedValue.interpolate({
            inputRange: [0, 0.8, 1],
            outputRange: [0, 0, 1],
          }),
        },
      ]}>
      <View
        style={{
          flex: 1,
          marginVertical: 50,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{ flex: 1 }} />

          <TouchableOpacity
            onPress={() => {
              finishAnimation();
              dispatch(setFullScreenModal(false));
            }}>
            <Text
              style={{
                fontSize: 24,
                marginHorizontal: 10,
                marginVertical: 5,
              }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: screenWidth - 70,
            height: screenHeight - 120,
          }}>
          <WebView
            useWebKit={true}
            source={{
              uri: url,
            }}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default Modal;

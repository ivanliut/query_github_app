import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, Dimensions, Animated, Easing } from 'react-native';
import { WebView } from 'react-native-webview';

import { setFullScreenModal } from '../../redux/app/actions';
import { selectIsFullScreenModal, selectWebViewUrl } from '../../redux/app/selectors';
import { useValueObserver } from '../../hooks/useValueObserver';

import styles from './styles';

const { height: screenHeight } = Dimensions.get('window');

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
        styles.root,
        {
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [screenHeight, 0],
              }),
            },
          ],
          opacity: animatedValue.interpolate({
            inputRange: [0, 0.8, 1],
            outputRange: [0, 0, 1],
          }),
        },
      ]}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.takeAvailableSpace} />

          <TouchableOpacity
            onPress={() => {
              finishAnimation();
              dispatch(setFullScreenModal(false));
            }}>
            <Text
              style={styles.button}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.webviewContainer}>
          <WebView
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

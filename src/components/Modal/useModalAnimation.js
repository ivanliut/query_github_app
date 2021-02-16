import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useModalAnimation = () => {
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

  return {
    animatedValue,
    startAnimation,
    finishAnimation,
  };
};

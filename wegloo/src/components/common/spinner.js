import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';

const startRotationAnimation = (durationMs, rotationDegree) => {
  Animated.loop(
    Animated.timing(rotationDegree, {
      toValue: 360,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();
};

const LoadingSpinner = ({ color, durationMs = 1000, testID, spinnerSize }) => {
  const rotationDegree = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRotationAnimation(durationMs, rotationDegree);
  }, [durationMs, rotationDegree]);

  return (
    <View style={[styles.container, { width: spinnerSize, height: spinnerSize }]} accessibilityRole="progressbar">
      <View style={[styles.background, { borderColor: color, borderRadius: spinnerSize / 2,}]} />
      <Animated.View
        testID={testID}
        style={[
          styles.progress,
          { borderTopColor: color,width:15,},
          {
            transform: [
              {
                rotateZ: rotationDegree.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    borderWidth: 4,
    opacity: 0.25,
  },
  progress: {
    width: '100%',
    height: '100%',
    // borderRadius: height / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderWidth: 4,
    position: 'absolute',
  },
});


export default LoadingSpinner;

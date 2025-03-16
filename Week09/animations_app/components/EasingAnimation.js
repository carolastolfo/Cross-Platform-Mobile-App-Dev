import { useRef, useEffect } from 'react';
import { Text, Animated, Easing } from 'react-native';

 export default function EasingAnimation() {

  const vector = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    Animated.timing(vector, {easing: Easing.bounce, toValue: 50, duration: 3000,}).start();
  }, []);

  return (
    <Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: vector.x,
          left: vector.y,
          backgroundColor: 'silver',
          padding: 10,
        }}>
        <Text>Hello World!</Text>
      </Animated.View>
    </Animated.View>
  );
}

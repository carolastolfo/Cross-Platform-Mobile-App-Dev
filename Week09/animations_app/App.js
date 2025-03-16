import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EasingAnimation from './components/EasingAnimation';
import CombinedAnimations from './components/CombiningAnimatedValues';
import ComposedAnimations from './components/ComposingAnimations';
import InterpolationAnimation from './components/Interpolation';
import TrackedAnimation from './components/TrackingDynamicValues';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <EasingAnimation /> */}
      {/* <CombinedAnimations /> */}
      {/* <ComposedAnimations /> */}
      {/* <InterpolationAnimation /> */}
      <TrackedAnimation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

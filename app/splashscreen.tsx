// SplashScreen.tsx
import { ActivityIndicator, StyleSheet, View, Text, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')} // <-- your logo path
        style={styles.logo}
        resizeMode='contain'
      />
      <ActivityIndicator size='large' color='#0000ff' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F1FF', // same as your splash background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // adjust size if needed
    height: 200,
  },
});

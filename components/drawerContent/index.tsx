// components/CustomDrawerContent.tsx
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Image, View, StyleSheet } from 'react-native';

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>
      <DrawerItemList {...props} />
      {/* <Link href={'/(drawer)/(tabs)/division'}>Division</Link> */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: 'contain',
  },
});

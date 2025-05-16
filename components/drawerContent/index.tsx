// components/CustomDrawerContent.tsx
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Image, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.menuItem}>
          <MaterialCommunityIcons name='home-outline' size={22} />
          <Link href='/home' style={styles.linkText}>
            Home
          </Link>
        </View>

        <View style={styles.menuItem}>
          <MaterialCommunityIcons name='information-outline' size={22} />
          <Link href='/about' style={styles.linkText}>
            About Us
          </Link>
        </View>

        <View style={styles.menuItem}>
          <MaterialCommunityIcons name='notebook-outline' size={22} />
          <Link href='/blog' style={styles.linkText}>
            Blog
          </Link>
        </View>

        <View style={styles.menuItem}>
          <MaterialCommunityIcons name='format-list-bulleted' size={22} />
          <Link href='/productList' style={styles.linkText}>
            Product List
          </Link>
        </View>

        <View style={styles.menuItem}>
          <MaterialCommunityIcons name='phone-outline' size={22} />
          <Link href='/contact' style={styles.linkText}>
            Contact
          </Link>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

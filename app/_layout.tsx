import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import { Drawer } from 'expo-router/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';
import React, { useEffect, useState } from 'react';
import CustomDrawerContent from '@/components/drawerContent';
import { router } from 'expo-router';
import SplashScreen from './splashscreen';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 3000);
  }, []);

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const screenWidth = Dimensions.get('window').width;

  if (!isAppReady) {
    return <SplashScreen />;
  } else
    return (
      <PaperProvider>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Drawer
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
              drawerStyle: {
                width: screenWidth * 0.7, // 50% of screen width
              },
              headerLeft: () => null,
              headerRight: () => {
                const navigation = useNavigation();
                return (
                  <Pressable
                    onPress={() =>
                      navigation.dispatch(DrawerActions.toggleDrawer())
                    }
                    style={{ marginRight: 15 }}
                  >
                    <Ionicons name='menu' size={24} />
                  </Pressable>
                );
              },
            }}
          >
            <Drawer.Screen
              name='(drawer)'
              options={{
                drawerLabel: 'Home',
                title: 'My App',
                headerTitle: () => (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={require('../assets/images/logo.png')}
                      style={{ width: 130, height: 100, marginRight: 8 }}
                      resizeMode='contain'
                    />
                  </View>
                ),
              }}
            />
            <Drawer.Screen
              name='blog'
              options={{
                title: 'Blogs',
                drawerLabel: 'Blogs',
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => router.back()}
                    style={{ marginLeft: 15, paddingRight: 100 }}
                  >
                    <Ionicons name='arrow-back' size={24} color='black' />
                  </TouchableOpacity>
                ),
              }}
            />
            <Drawer.Screen
              name='about'
              options={{
                title: 'About Us',
                drawerLabel: 'About',
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => router.back()}
                    style={{ marginLeft: 15, paddingRight: 100 }}
                  >
                    <Ionicons name='arrow-back' size={24} color='black' />
                  </TouchableOpacity>
                ),
              }}
            />
            <Drawer.Screen
              name='productDetail'
              options={{
                title: 'PCD Products',
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => router.back()}
                    style={{ marginLeft: 15, paddingRight: 100 }}
                  >
                    <Ionicons name='arrow-back' size={24} color='black' />
                  </TouchableOpacity>
                ),
              }}
            />
            <Drawer.Screen
              name='highQualityProduct'
              options={{
                title: 'PCD Products',
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => router.back()}
                    style={{ marginLeft: 15, paddingRight: 100 }}
                  >
                    <Ionicons name='arrow-back' size={24} color='black' />
                  </TouchableOpacity>
                ),
              }}
            />
            <Drawer.Screen
              name='blogDetails'
              options={{
                title: 'Blog Details',
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => router.back()}
                    style={{ marginLeft: 15, paddingRight: 100 }}
                  >
                    <Ionicons name='arrow-back' size={24} color='black' />
                  </TouchableOpacity>
                ),
              }}
            />
          </Drawer>
        </ThemeProvider>
      </PaperProvider>
    );
}

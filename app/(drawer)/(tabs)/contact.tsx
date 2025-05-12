import { View, Text } from 'react-native';
import React from 'react';
import ContactPage from '@/container/contact';
// import { useNavigationOptions } from 'expo-router';

export default function Contact() {
  // useNavigationOptions({
  //   headerShown: false, // ← hide the header just on this page
  // });
  return (
    <View>
      <ContactPage />
    </View>
  );
}

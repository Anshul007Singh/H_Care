import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#59AFFF',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#00368B',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='contact'
        options={{
          title: 'Contact',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='address-book' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='productlist'
        options={{
          title: 'Product List',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='list' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

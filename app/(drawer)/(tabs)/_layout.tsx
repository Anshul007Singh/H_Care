import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router, Tabs, useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  const handleProductListPress = () => {
    router.push('/productlist');
  };
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
        name='home'
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
        name='[productlist]'
        options={{
          title: 'Product List',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity onPress={handleProductListPress}>
              <FontAwesome name='list' size={size} color={color} />
            </TouchableOpacity>
          ),
          // tabBarButton: () => (
          //   <TouchableOpacity onPress={handleProductListPress}>
          //     {/* <FontAwesome name='list' size={24} color='#fff' /> */}
          //   </TouchableOpacity>
          // ),
        }}
      />
    </Tabs>
  );
}

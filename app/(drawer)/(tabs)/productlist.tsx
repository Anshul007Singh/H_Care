import React from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ProductList } from '@/data/productList';

const ProductListScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
      // onPress={() => navigation.navigate('')}
      >
        <Image
          source={{ uri: item.img }}
          style={styles.image}
          resizeMode='contain'
        />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={ProductList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 8,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 8,
    resizeMode: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: '#06705f',
  },
});

export default ProductListScreen;

import React, { useMemo } from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { Text } from 'react-native-paper';
import { ProductList } from '@/data/productList';
import { router, useLocalSearchParams } from 'expo-router';

const HighQualityProducts = () => {
  const params = useLocalSearchParams();
  const categoryFromParams =
    typeof params.title === 'string' ? params.title : 'all';

  const filteredProducts = useMemo(() => {
    if (categoryFromParams.toLowerCase() === 'all') return ProductList;
    return ProductList.filter(
      (item) =>
        item.category.toLowerCase() === categoryFromParams.toLowerCase(),
    );
  }, [categoryFromParams]);

  const imageHandler = (item: any) => {
    router.push({
      pathname: '/productDetail',
      params: {
        id: item.id,
        title: item.title,
        img: item.img,
        category: item.category,
      },
    });
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => imageHandler(item)}>
        <Image src={item.img} style={styles.image} resizeMode='contain' />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={<Text>No products found for this category.</Text>}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{categoryFromParams}</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 8,
    display: 'flex',
  },
  itemContainer: {
    width: '46%',
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 8,
    resizeMode: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  headerContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'capitalize',
  },
});

export default HighQualityProducts;

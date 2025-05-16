import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import { Text } from 'react-native-paper';
import { ProductList } from '@/data/productList';
import { router, useLocalSearchParams } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const ProductListScreen = () => {
  const params = useLocalSearchParams();
  const extractCategory = () => {
    const value = params?.productlist;
    if (!value || typeof value !== 'string') return null;
    const parts = value.split('productlist-');
    return parts.length > 1 ? parts[1] : null;
  };

  const initialCategory = extractCategory();
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory || 'all',
  );
  const [modalVisible, setModalVisible] = useState(false);

  const categories = useMemo(() => {
    const all = ProductList.map((item) => item.category);
    return ['all', ...new Set(all)];
  }, []);

  const filteredProducts =
    selectedCategory === 'all'
      ? ProductList
      : ProductList.filter((item) => item.category === selectedCategory);

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

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setModalVisible(false);
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
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {selectedCategory === 'all' ? 'All Products' : selectedCategory}
        </Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.iconWrapper}
        >
          <Feather name='filter' size={24} color='#59AFFF' />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text>No products found for this category.</Text>}
      />

      {/* Modal Filter Menu */}
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => handleCategorySelect(cat)}
                style={styles.modalItem}
              >
                <Text style={styles.modalItemText}>
                  {cat === 'all' ? 'All Products' : cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  iconWrapper: {
    marginRight: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    padding: 8,
  },
  itemContainer: {
    flex: 1,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    marginHorizontal: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProductListScreen;

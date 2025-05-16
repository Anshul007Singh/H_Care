import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-paper';

const DATA = [
  {
    id: '1',
    name: 'H & Care',
    logo: 'https://hcareindia.com/wp-content/uploads/2024/09/1.png',
  },
  {
    id: '2',
    name: 'Mediquest Inc',
    logo: 'https://hcareindia.com/wp-content/uploads/2024/09/2.png',
  },
  {
    id: '3',
    name: 'Item 3',
    logo: 'https://hcareindia.com/wp-content/uploads/2024/09/3.png',
  },
  {
    id: '4',
    name: 'Item 4',
    logo: 'https://hcareindia.com/wp-content/uploads/2024/09/7.png',
  },
  {
    id: '5',
    name: 'Item 5',
    logo: 'https://hcareindia.com/wp-content/uploads/2024/09/8.png',
  },
  {
    id: '6',
    name: 'Item 6',
    logo: 'https://hcareindia.com/wp-content/uploads/2024/09/6.png',
  },
  {
    id: '7',
    name: 'Item 7',
    logo: 'https://hcareindia.com/wp-content/uploads/2024/09/5.png',
  },
  {
    id: '8',
    name: 'Item 8',
    logo: 'https://hcareindia.com/wp-content/uploads/2024/08/2.png',
  },
];

const ListWithoutPaper = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item.logo }}
        style={styles.logo}
        onError={() => console.log('Error loading image')}
      />
      <TouchableOpacity onPress={() => alert(`Download  ${item.name}`)}>
        <Button
          mode='outlined'
          onPress={() => alert(`Download ${item.name}`)}
          style={styles.buttonText}
        >
          <Text style={{ color: '#00368B', fontWeight: 'bold' }}>Download</Text>
        </Button>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      ListHeaderComponent={<Text style={styles.headerText}>Our Divisions</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#00368B',
    marginBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: 'rgba(27, 76, 238, 0.76)',
    shadowOffset: { width: 3, height: 7 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 7,
  },
  logo: {
    width: 170,
    height: 70,
    borderRadius: 20,
    marginRight: 12,
    resizeMode: 'contain',
  },
  buttonText: {
    color: '#00368B',
    marginLeft: 50,
  },
});

export default ListWithoutPaper;

import React, { useRef, useState } from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, View, Dimensions, Image, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';

const { width: screenWidth } = Dimensions.get('window');

const data = [
  { id: 1, image: 'https://hcareindia.com/wp-content/uploads/2024/09/1-5.png' },
  { id: 2, image: 'https://hcareindia.com/wp-content/uploads/2024/09/2-4.png' },
  { id: 3, image: 'https://hcareindia.com/wp-content/uploads/2024/09/3-5.png' },
  { id: 4, image: 'https://hcareindia.com/wp-content/uploads/2024/09/4-4.png' },
  { id: 5, image: 'https://hcareindia.com/wp-content/uploads/2024/09/5-2.png' },
  { id: 6, image: 'https://hcareindia.com/wp-content/uploads/2024/09/7-2.png' },
  { id: 7, image: 'https://hcareindia.com/wp-content/uploads/2024/09/8-2.png' },
];

const PremiumProducts = () => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const itemWidth = screenWidth / 2;
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    if (scrollViewRef.current) {
      const newPosition = Math.max(scrollPosition - itemWidth, 0);
      setScrollPosition(newPosition);
      scrollViewRef.current!.scrollTo({ x: newPosition, animated: true });
    }
  };

  const handleScrollRight = () => {
    if (scrollViewRef.current) {
      const maxPosition = (data.length - 2) * itemWidth;
      const newPosition = Math.min(scrollPosition + itemWidth, maxPosition);
      setScrollPosition(newPosition);
      scrollViewRef.current!.scrollTo({ x: newPosition, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant='headlineMedium'>
        Our Premium Products
      </Text>
      <IconButton
        icon='chevron-left'
        size={26}
        iconColor='#59AFFF'
        onPress={handleScrollLeft}
        style={styles.arrowLeft}
      />

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth}
        decelerationRate='fast'
        onScroll={(event) => {
          const currentOffset = event.nativeEvent.contentOffset.x;
          setScrollPosition(currentOffset);
        }}
        scrollEventThrottle={16}
      >
        {data.map((item) => (
          <View key={item.id} style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <IconButton
        icon='chevron-right'
        size={26}
        iconColor='#59AFFF'
        onPress={handleScrollRight}
        style={styles.arrowRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    width: screenWidth / 2,
    marginEnd: 10,
    boxShadow: '0 1 4 #ccc',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    color: '#00378B',
  },
  image: {
    width: '100%',
    height: 240,
    resizeMode: 'contain',
  },
  arrowLeft: {
    position: 'absolute',
    right: 25,
    top: 8,
    zIndex: 1,
  },
  arrowRight: {
    position: 'absolute',
    right: 0,
    top: 8,
    zIndex: 100,
  },
});

export default PremiumProducts;

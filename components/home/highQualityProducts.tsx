import React, { useRef, useState } from 'react';
import { Text, Title } from 'react-native-paper';
import { Card, Button } from 'react-native-paper';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { router } from 'expo-router';

const { width: screenWidth } = Dimensions.get('window');

const data = [
  {
    id: 1,
    image: 'https://hcareindia.com/wp-content/uploads/2024/09/1-6.png',
    title: 'Analgesic & NASAID Range',
  },
  {
    id: 2,
    image: 'https://hcareindia.com/wp-content/uploads/2024/09/2-5.png',
    title: 'Anti Malarial & Anti Infective',
  },
  {
    id: 3,
    image: 'https://hcareindia.com/wp-content/uploads/2024/09/3-6.png',
    title: 'Antibiotics product Range',
  },
  {
    id: 4,
    image: 'https://hcareindia.com/wp-content/uploads/2024/09/4-5.png',
    title: 'Anti acid & Gastric Range',
  },
  {
    id: 5,
    image: 'https://hcareindia.com/wp-content/uploads/2024/09/16-1.png',
    title: 'Injectables',
  },
  {
    id: 6,
    image: 'https://hcareindia.com/wp-content/uploads/2024/09/6-3.png',
    title: 'Anti Cough & Cold',
  },
  {
    id: 7,
    image: 'https://hcareindia.com/wp-content/uploads/2024/09/7-3.png',
    title: 'Pediatrics',
  },
];

const PremiumProducts = () => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const itemWidth = screenWidth / 2;
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    if (scrollViewRef.current) {
      const newPosition = Math.max(scrollPosition - itemWidth, 0);
      setScrollPosition(newPosition);
      scrollViewRef.current.scrollTo({ x: newPosition, animated: true });
    }
  };

  const handleScrollRight = () => {
    if (scrollViewRef.current) {
      const maxPosition = (data.length - 2) * itemWidth;
      const newPosition = Math.min(scrollPosition + itemWidth, maxPosition);
      setScrollPosition(newPosition);
      scrollViewRef.current.scrollTo({ x: newPosition, animated: true });
    }
  };

  const handleReadMore = (title: string) => {
    router.push({
      pathname: '/highQualityProduct',
      params: {
        title: title,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.HQPPtitle} variant='titleMedium'>
        Hgh Quality PCD Products
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
          <Card
            onPress={() => handleReadMore(item.title)}
            style={styles.card}
            key={item.id}
          >
            <Card.Cover
              source={{
                uri: `${item.image}`,
              }}
            />
            <Card.Content>
              <Text style={styles.title}>{item.title}</Text>
            </Card.Content>
          </Card>
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
    padding: 20,
  },
  HQPPtitle: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 20,
    color: '#00378B',
    alignSelf: 'flex-start',
  },
  imageContainer: {
    width: screenWidth / 2,
    resizeMode: 'cover',
  },
  card: {
    width: 250,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: 'rgba(88, 26, 204, 0.89)',
    shadowOffset: { width: 3, height: 7 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 7,
  },
  title: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: 'bold',
  },
  arrowLeft: {
    position: 'absolute',
    right: 25,
    top: 8,
    zIndex: 1,
    marginRight: 10,
  },
  arrowRight: {
    position: 'absolute',
    right: 0,
    top: 8,
    zIndex: 100,
    marginLeft: 10,
  },
});

export default PremiumProducts;

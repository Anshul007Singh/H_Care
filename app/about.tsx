import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import {
  Text,
  Title,
  Provider as PaperProvider,
  Divider,
} from 'react-native-paper';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');
const VIDEO_HEIGHT = (width * 9) / 16; // 16:9 aspect ratio
const { width: screenWidth } = Dimensions.get('window');

const data = [
  {
    id: 1,
    image: 'https://hcareindia.com/wp-content/uploads/2024/08/certificaton.jpg',
  },
  {
    id: 2,
    image:
      'https://hcareindia.com/wp-content/uploads/2024/08/certification-2.jpg',
  },
];

export default function HCareInfo() {
  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Title style={styles.heading}>
          H & Care Incorp - Best Pharma Franchise Company in India
        </Title>
        <Text style={styles.subHeading}>
          Experience the best quality pharma products with H & Care Incorp
        </Text>

        <View style={styles.videoContainer}>
          <WebView
            style={styles.video}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            allowsFullscreenVideo={true}
            source={{
              uri: 'https://youtu.be/BTrj_SDHM2Q',
            }}
          />
        </View>

        <Text style={styles.paragraph}>
          Secure your future with a growing market{'\n'}H & Care Incorp is a Top
          pharma franchise company in India that holds GMP-certifications. H &
          Care Incorp is one of the best PCD companies in India. We have all
          certificates that show our products are safe and of good quality. Many
          people can easily find and buy our healthcare products, which is why
          we're so well-known.
        </Text>

        <Text style={styles.paragraph}>
          More and more people want good healthcare that doesn't cost too much.
          Starting a business with us is best because: You don't need to spend a
          lot of money to start. You can earn a good profit. Join us at H & Care
          Incorp and build a strong future for yourself. We have affordable
          products that are easy for people to get. This means you'll be helping
          your customers stay healthy while also making money in a growing
          market.
        </Text>

        <Text style={styles.paragraph}>
          We also have special approvals from the government (DCGI and FSSAI)
          that prove our products are safe and meet all the rules. Our product
          quality and vast accessibility has made us one of the best pharma
          franchise companies in India. Trust us for all your healthcare
          products.
        </Text>

        <Text style={styles.paragraph}>
          The demand for affordable, high-quality healthcare is only increasing.
          Low Investment with High Returns: Discover how this pharma franchise
          business is a highly profitable business with low investments. Join
          the industry leader and secure your future by partnering with H & Care
          Incorp.
        </Text>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#E6EFFA',
            padding: 24,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 32,
            }}
          >
            Reasons Why We are the Right{'\n'}Choice for Pharma Franchise
          </Text>

          <View style={{ alignItems: 'center', marginBottom: 40 }}>
            <Image
              src='https://hcareindia.com/wp-content/uploads/2024/09/1-4.png' // Replace with your actual image
              style={{ width: 60, height: 60, marginBottom: 12 }}
            />
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>600</Text>
            <Text>No of Business Associates</Text>
          </View>

          <View style={{ alignItems: 'center', marginBottom: 40 }}>
            <Image
              src='https://hcareindia.com/wp-content/uploads/2024/09/2-3.png' // Replace with your actual image
              style={{ width: 60, height: 60, marginBottom: 12 }}
            />
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>900</Text>
            <Text>No of Products</Text>
          </View>
          <View style={{ alignItems: 'center', marginBottom: 40 }}>
            <Image
              src='https://hcareindia.com/wp-content/uploads/2024/09/3-4.png' // Replace with your actual image
              style={{ width: 60, height: 60, marginBottom: 12 }}
            />
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>900</Text>
            <Text>No of Products</Text>
          </View>
          <View style={{ alignItems: 'center', marginBottom: 40 }}>
            <Image
              src='https://hcareindia.com/wp-content/uploads/2024/09/4-3.png' // Replace with your actual image
              style={{ width: 60, height: 60, marginBottom: 12 }}
            />
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>900</Text>
            <Text>No of Products</Text>
          </View>
        </ScrollView>
        <ScrollView
          contentContainerStyle={{ padding: 16, backgroundColor: '#fff' }}
        >
          <Title style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
            Our Management
          </Title>

          {[
            'Director: Mr Munish Goyal',
            'Co-Founder: Mrs Luvlish Goyal',
            'Experience: Above 23 Years In Pharmaceutical Industry',
            'Ind-Swift Ltd: Firstly, as Formulation Scientist',
            'Dabur Research Foundation: As Research Associate',
            'Torrent Research Center: Finally, as Senior Group Leader',
            'Pharma Business Experience: 14 Years',
          ].map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginBottom: 12,
              }}
            >
              <Text style={{ fontSize: 18, marginRight: 8 }}>✓</Text>
              <Text style={{ flex: 1 }}>{item}</Text>
            </View>
          ))}

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: 24,
            }}
          >
            <Image
              src='https://www.hcareindia.com/wp-content/uploads/2024/12/pharma-franchise-company-2.png'
              style={{ width: 350, height: 250, margin: 8, borderRadius: 8 }}
            />
            <Text
              style={{
                flex: 1,
                backgroundColor: '#F8F8F8',
                padding: 10,
                marginTop: -10,
                paddingRight: 10,
              }}
            >
              Best Pharma Franchise Company in India
            </Text>
          </View>
        </ScrollView>
        <View>
          <Text
            variant='headlineLarge'
            style={{ alignSelf: 'center', marginBottom: 10, fontWeight: 700 }}
          >
            Our Certificates
          </Text>
          <Image
            src='https://hcareindia.com/wp-content/uploads/2024/08/certificaton.jpg'
            style={{
              width: 250,
              height: 350,
              margin: 8,
              borderRadius: 8,
              resizeMode: 'cover',
              alignSelf: 'center',
            }}
          />
          <Image
            src='https://hcareindia.com/wp-content/uploads/2024/08/certification-2.jpg'
            style={{
              width: 250,
              height: 350,
              margin: 8,
              borderRadius: 8,
              resizeMode: 'cover',
              alignSelf: 'center',
              marginBottom: 20,
            }}
          />
          <Divider />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00368B',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 16,
    color: '#00368B',
    marginBottom: 16,
  },
  videoContainer: {
    width: width - 32,
    height: VIDEO_HEIGHT,
    alignSelf: 'center',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
    color: '#333',
  },
  imageContainer: {
    width: '100%',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

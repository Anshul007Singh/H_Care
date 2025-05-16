import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Title } from 'react-native-paper';

const BlogDetailScreen = () => {
  const { title, img } = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {img ? (
        <Image src={`${img}`} style={styles.image} resizeMode='cover' />
      ) : null}

      <Text style={styles.dummyContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        ullamcorper, risus ac facilisis ullamcorper, nulla justo tincidunt
        turpis, nec tempor turpis mi sed arcu. Vivamus ut turpis ut augue
        porttitor scelerisque non ac quam. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas.
      </Text>
      <Title>
        New Age of Dental Treatments: Laser Dentistry and Dental Impants
      </Title>
      <Text>
        In a world where technology is reshaping how we live, it’s only fitting
        that dentistry, that old symbol of drills, pain, and metal braces has
        rewritten its own story too. Today, a dental chair isn’t just a place
        for treatment. It’s a front-row seat to innovation, where laser beams
        replace scalpels, invisible braces outsmart wires, and pharmaceutical
        magic speeds up healing behind the scenes. Here is the modern dental
        care, a world where science, comfort, and creativity meet.
      </Text>
      <Title>When Light Becomes the Dentist’s Gentle Touch</Title>
      <Text>
        Imagine fixing a gum infection or sculpting a perfect smile not with
        blades, but with beams of light. That’s the beauty of laser dentistry
        which you get at any good dental clinic. Gone are the days of buzzing
        drills and bloody gauze. Instead, a precisely focused laser vaporizes
        bacteria, reshapes tissue, and polishes your teeth all while causing
        less trauma than an old-fashioned toothbrush scrape. But lasers alone
        don’t make miracles. This is where pharmaceutical science quietly steps
        in. After a laser procedure, dentists now use pharma-engineered gels
        packed with bioactive peptides and growth factors. These aren’t your
        regular ointments, they’re molecular architects, nudging your body to
        heal faster, better, and smarter. What used to be weeks of swelling now
        melts away in days. And you, the patient, often barely notice except for
        how quickly you’re smiling again.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  dummyContent: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default BlogDetailScreen;

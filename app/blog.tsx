import React, { useState } from 'react';
import { ScrollView, View, Image, StyleSheet, Pressable } from 'react-native';
import {
  Text,
  Card,
  Title,
  Paragraph,
  Button,
  Portal,
  Dialog,
} from 'react-native-paper';
import { router } from 'expo-router';
import { BlogsData } from '@/data/blogsData';

const BlogScreen = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const handleReadMore = (title: any) => {
    router.push('/about');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {BlogsData.map((blog) => (
        <Card key={blog.id} style={styles.card}>
          <Card.Content>
            {blog.img && (
              <Pressable
                onPress={() => {
                  setSelectedImage(blog.img);
                  showDialog();
                }}
              >
                <Image source={{ uri: blog.img }} style={styles.image} />
              </Pressable>
            )}
            <Title style={styles.title}>{blog.title}</Title>
            <Paragraph>{blog.content}</Paragraph>
            <Button
              mode='text'
              onPress={() => handleReadMore(blog.title)}
              style={styles.readMoreButton}
            >
              Read More...
            </Button>
          </Card.Content>
        </Card>
      ))}

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={styles.fullImage}
              resizeMode='contain'
            />
          )}
        </Dialog>
      </Portal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#003f87',
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 3,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#00695c',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  readMoreButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '90%',
    height: '80%',
    borderRadius: 10,
  },
});

export default BlogScreen;

import React, { useState } from 'react';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';
import { Text, View } from "./Themed";
import { H1, Body1 } from './Fonts';

export interface Book {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { title, description, image } = book;
  const { width, height } = useWindowDimensions();
  const [isLoaded, setIsLoading] = useState(true);

  return (
    <View style={width > height ? styles.containerLandscape : styles.containerPortrait}>
      <View>
        <Image
          testID="book-image"
          source={isLoaded ? { uri: image } : require('../assets/images/placeholder.jpg')}
          style={styles.image}
          onError={() => setIsLoading(false)}
        />
      </View>
      <View style={styles.content}>
        <H1>{title}</H1>
        <Body1 style={styles.description}>{description}</Body1>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPortrait: {
    padding: 16,
    borderRadius: 8,
    margin: 8,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center'
  },
  containerLandscape: {
    padding: 16,
    borderRadius: 8,
    margin: 8,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 150,
    marginRight: 16,
    marginBottom: 16,
  },
  content: {
    flex: 1,
  },
  description: {
    marginTop: 8,
  },
});

export default BookCard;

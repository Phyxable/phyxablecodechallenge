import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { View } from "./Themed";
import { H1, Body1 } from './Fonts';

export interface Book {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface BookCardProps {
  book: Book;
  isDrawer: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ book, isDrawer = false }) => {
  const { title, description, image } = book;
  const [isLoaded, setIsLoading] = useState(true);

  return (
    // Determine the container style based on the navigation type
    <View style={isDrawer ? styles.containerLandscape : styles.containerPortrait}>
      <View>
        {/* Display the book image, use a placeholder if loading fails */}
        <Image
          testID="book-image"
          source={isLoaded ? { uri: image } : require('../assets/images/placeholder.jpg')}
          style={styles.image}
          onError={() => setIsLoading(false)} // Handle image loading errors
        />
      </View>
      <View style={styles.space} />
      <View style={styles.content}>
        <H1>{title}</H1>
        <Body1
          numberOfLines={isDrawer ? 4 : 7} // Limit the number of lines for description
          ellipsizeMode="tail"
          style={styles.description}
        >
          {description}
        </Body1>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPortrait: {
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    flex: 1,
  },
  containerLandscape: {
    padding: 16,
    borderRadius: 8,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  space: {
    margin: 8,
  },
  content: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 150,
  },
  description: {
    marginTop: 8,
  },
});

export default BookCard;

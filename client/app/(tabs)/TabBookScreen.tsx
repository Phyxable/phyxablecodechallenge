import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import BookCard, { Book } from "../../components/BookCard";
import { getBooks } from '../../services/apiService';
import useOrientation from '../../hooks/useOrientation';


export default function TabBookScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const { isDrawer, columns } = useOrientation();
  // Calculate the item width for rendering based on the number of columns.
  const itemWidth = Math.floor(100 / columns);

  useEffect(() => {
    getBooks().then(booksData => {
      setBooks(booksData);
      setLoading(false);
    }).catch((err) => {
      setError(err);
      setLoading(false);
    })
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {loading ? (
          // Display a loading message if data is still being fetched.
          <Text>Loading...</Text>
        ) : error ? (
          // Display an error message if an error occurred during fetching.
          <Text>Error: {error.message}</Text>
        ) : books.length === 0 ? (
          // Display a message when there are no books available.
          <Text>No books available.</Text>
        ) : (
          // Render a FlatList when books are available and no errors occurred.
          <FlatList
            numColumns={columns}
            data={books}
            keyExtractor={(book) => book.id.toString()}
            style={styles.list}
            renderItem={({ item }) => (
              <View style={{width: `${itemWidth}%`}}>
                <BookCard key={item.id} book={item} isDrawer={isDrawer} />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: '100%',
  },
});

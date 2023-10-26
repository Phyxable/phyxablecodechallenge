import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import BookCard, { Book } from "../../components/BookCard";
import { getBooks } from '../../services/apiService';


export default function TabBookScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

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
          <Text>Loading...</Text>
        ) : error ? (
          <Text>Error: {error.message}</Text>
        ) : books.length === 0 ? (
          <Text>No books available.</Text>
        ) : (
          <FlatList
            data={books}
            keyExtractor={(book) => book.id.toString()}
            style={styles.list}
            renderItem={({ item }) => (
              <BookCard key={item.id} book={item} />
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
  }
});

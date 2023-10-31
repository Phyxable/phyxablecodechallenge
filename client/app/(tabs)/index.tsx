import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import useGetBooks from "../../hooks/useGetBooks";
import BookItem from "../../components/BookItem";

type Book = {
  id: string;
  title: string;
  image: string;
};

export default function TabOneScreen() {
  const { books, loading, error } = useGetBooks("userId");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {loading && <ActivityIndicator />}
      {!loading && (
        <View>
          <FlatList
            data={books}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <BookItem book={item} />}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

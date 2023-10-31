import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

type Props = {
  book: {
    id: string;
    title: string;
    image: string;
  };
};

const BookItem = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const { book } = props;
  return (
    <View key={book.id} style={styles.container}>
      <Image
        source={{ uri: book.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={{ flexWrap: "wrap" }}
      >
        <Text style={styles.title}>{book.title}</Text>
        <Text numberOfLines={2} style={styles.description} ellipsizeMode="clip">
          {book.description.substring(0, 45) + "..."}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        visible={visible}
        presentationStyle="formSheet"
        onDismiss={() => setVisible(false)}
      >
        <ScrollView
          style={{ padding: 10 }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{
              backgroundColor: "red",
              alignSelf: "flex-start",
              borderRadius: 50,
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 10, color: "white", fontWeight: "bold" }}>
              Close
            </Text>
          </TouchableOpacity>

          <Image
            source={{ uri: book.image }}
            style={{ ...styles.image, marginBottom: 20 }}
            resizeMode="contain"
          />
          <Text style={{ ...styles.title, marginBottom: 10 }}>
            {book.title}
          </Text>
          <Text style={styles.description}>{book.description}</Text>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
  container: {
    margin: 10,
    padding: 10,
  },

  title: {
    color: "#101010",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "#4e4e4e",
    fontSize: 15,
    width: 200,
  },
});

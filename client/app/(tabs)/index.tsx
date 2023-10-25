import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { H1 } from "../../components/Fonts";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <H1 style={styles.title}>Home</H1>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View>
        <Text>
          Please click Books tab to show the content
        </Text>
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

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Cosmetic app!</Text>
      <View>
        <Text
          style={{
            margin: 20,
            borderWidth: 3,
            borderColor: "#000000",
            backgroundColor: "green",
            padding: 20,
          }}
        >
          Another piece of text
        </Text>
      </View>
      <Button title="Click me!" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

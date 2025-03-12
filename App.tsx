import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [person, setPerson] = useState({ name: "Person name", age: 10 });
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 16, color: "red" }}>
          This is the <Text style={styles.mainText}>{count}</Text>
        </Text>
        <Text>{JSON.stringify(person)}</Text>
      </View>
      <Text>Open up App.tsx to start working on your Application!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 20,
    paddingHorizontal: 12,
  },
  mainText: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "green",
  },
});

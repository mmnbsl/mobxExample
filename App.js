import * as React from "react";
import { View, Text } from "react-native";
import Counter from "./src/components/Counter";
import Person from "./src/components/Person";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counter/>
    </View>
  );
}

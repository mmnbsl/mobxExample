import { Provider } from "mobx-react";
import * as React from "react";
import { View, Text } from "react-native";
import Counter from "./src/components/Counter";
import Person from "./src/components/Person";
import Users from "./src/components/Users";
import storege from './src/storage/index'

export default function App() {
  return (
    <Provider {...storege}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Users/>
      </View>
    </Provider>
  );
}

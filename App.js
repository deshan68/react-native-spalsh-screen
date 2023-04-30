import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./src/screens/Splash";
import { useState } from "react";
import Home from "./src/screens/Home";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  return isLoading ? <Splash setIsLoading={setIsLoading} /> : <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

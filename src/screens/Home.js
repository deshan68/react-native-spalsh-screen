import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import LottieContainer from "../components/LottieContainer";

const animations = [
  {
    name: "Sucees",
    source: "https://lottiefiles.com/115988-saudi-suceess",
    author: "sahil mansoori",
    path: require("../assets/sucessLoading.json"),
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {animations.map((animation, index) => (
          <LottieContainer animation={animation} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

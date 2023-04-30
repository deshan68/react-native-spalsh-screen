import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Splash = ({ setIsLoading }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", margin: 0 }}>
      <LottieView
        source={require("../assets/splashLoading.json")}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => setIsLoading(false)}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});

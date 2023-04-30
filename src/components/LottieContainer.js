import { StyleSheet, Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import { SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import { Button } from "react-native";
import { Linking } from "react-native";

const LottieContainer = ({ animation }) => {
  const [show, setShow] = useState(true);
  return (
    <View style={styles.container}>
      {show && (
        <LottieView
          source={animation.path}
          loop={false}
          autoPlay
          resizeMode="contain"
          onAnimationFinish={() => setShow(false)}
        />
      )}
      <Button title="Paly" onPress={() => setShow(true)} />
      <Button
        title="Go to web"
        onPress={() => Linking.openURL(animation.source)}
      />
    </View>
  );
};

export default LottieContainer;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
  },
});

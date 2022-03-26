import {
  StyleSheet,
  View,
} from "react-native";
import { Icon, Image, Button } from "react-native-elements";
import React, { useState } from "react";

export default function Report(props) {
  const {navigation} = props

  return (
    <View style={styles.container}>
      <Icon
        reverse
        type="material-community"
        size={22}
        color="gray"
        containerStyle={styles.iconContainer}
        name="plus"
        onPress={() => navigation.navigate("vistaReporte")}
        //
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
},
iconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5
}
});

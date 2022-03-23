import { StyleSheet, Text, View,Picker } from "react-native";
import React,{useState} from "react";

export default function CreateReport() {
    const [selectedValue, setSelectedValue] = useState("Agua");
  return (
    <View style={styles.container}>
      <Text style={styles.textAspect}>Aspecto</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 60, width: 250 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Agua" value="Agua" />
        <Picker.Item label="Flora y Fauna" value="Flora y Fauna" />
        <Picker.Item label="Electricidad" value="Electricidad" />
        <Picker.Item label="Residuos Solidos" value="Residuos Solidos" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  textAspect:{
    justifyContent: "flex-start",
    alignItems: "flex-start",
  }
 
});

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  LogBox,
  ImageStore,
} from "react-native";
import React from "react";
import { size } from "lodash";
import { Icon, Image, Card} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ListCapsulas(props) {
  console.log("props->", props);
  const navigation = useNavigation();
  const { capsulas } = props;
  console.log("capsulas->", capsulas);
  return (
    <ScrollView>
      {size(capsulas) > 0 ? (
        <FlatList
          data={capsulas}
          renderItem={(capsula) => (
            <Capsula capsula={capsula} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        //onEnd
        //que tan largo debe ser la interacción
        />
      ) : (
        <View>
          <ActivityIndicator size="large" color="#131c46" />
          <Text>Cargando Capsula</Text>
        </View>
      )}
    </ScrollView>
  );
}

function Capsula(props) {
  console.log("propsCapsula->", props);
  const { capsula, navigation } = props;
  const { contenido, titulo, imagenesCapsula } = capsula.item;
  const imagenPrueba = imagenesCapsula[capsula.index];
  const { imagen } = imagenPrueba;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("capsulaInfo", {
          capsula: props.capsula.item,
          navigation: navigation,
        })
      }
    >
      <View style={styles.container}>
        <Card>
          <Card.Title>{titulo}</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={
              imagen
                ? { uri: `data:image/jpeg;base64, ${imagen}` }
                : require("../../../assets/icon.png")
            }
          />
          <Text style={{ marginBottom: 10, marginTop: 5 }}>
            {contenido}
          </Text>
        </Card>
      </View>
    </TouchableOpacity>
  );

  //<Text style={{ fontWeight: "bold" }}>{titulo}</Text>  lo que se va a mostrar aparte de la
  //imagen de la capsula
}

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
  },
  container: {
    flexDirection: "row",
    margin: 10,
  },
  viewImage: {
    marginRight: 15,
  },
});

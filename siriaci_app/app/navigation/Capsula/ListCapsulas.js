import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { size } from "lodash"
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


export default function ListCapsulas(props) {
  console.log("props->", props);
  const { images, navigation } = props

  return (
    <ScrollView>
      {size(images) > 0 ? (
        <FlatList
          data={images}
          renderItem={(image) => <Capsula image={image} navigation={navigation} />}
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
  )
} function Capsula(props) {
  const { image, navigation } = props;
  //console.log(image.item)
  const { imagen, capsula } = image.item
  const { titulo, contenido } = capsula

  console.log(imagen)
  return (
    <TouchableOpacity >
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image
            resizeMode="cover"
            PlaceholderContent={
              <ActivityIndicator size="large" color="#131c46" />
            }
            source={
              imagen
                ? { uri: `data:image/jpeg;base64, ${imagen}` }
                : require("../../../assets/icon.png")
            }
            style={styles.img}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>{titulo}</Text> 
          <Text style={{ paddingTop: 2, color: "gray" }}>{contenido}</Text>
        </View>
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
})
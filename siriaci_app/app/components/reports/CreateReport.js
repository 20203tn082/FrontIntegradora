import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Icon, Image, Button, Divider, Avatar } from "react-native-elements";
import React, { useCallback, useEffect, useState } from "react";
import * as Location from "expo-location";
import { isEmpty, map, size } from "lodash";
import { useFocusEffect } from "@react-navigation/native";
import MapView from "react-native-maps";
import * as ImagePicker from "expo-image-picker";
import Modal from "../../utils/Modal";


export default function CreateReport(props) {
  const { toastRef, navigation } = props
  const [selectedValue, setSelectedValue] = useState("");
  const [aspectos, setAspectos] = useState([])
  const [importancias, setImportancias] = useState([])
  const [aspectoSeleccionado, setAspectoSeleccionado] = useState("1")
  const [importanciaSeleccionada, setImportanciaSeleccionada] = useState("1")
  const [isVisibleMap, setIsVisibleMap] = useState(false)
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState(null)
  const [descripcion, setDescripcion] = useState("")
  const [lugar, setLugar] = useState("")
  const [imagenes, setImagenes] = useState([])
  const [error, setError] = useState({
    aspecto: "",
    importancia: "",
    descripcion: "",
    ubicacion: "",
  })
  

  const registrar = () =>{

    console.log(parseInt(aspectoSeleccionado)==0)
    console.log(parseInt(importanciaSeleccionada) ==0)
    console.log(isEmpty(descripcion))
    console.log(isEmpty(ubicacionSeleccionada))

    if(parseInt(aspectoSeleccionado)==0 || parseInt(importanciaSeleccionada) ==0  || isEmpty(descripcion) 
    || isEmpty(ubicacionSeleccionada)){
      console.log("Errores")
      if(parseInt(aspectoSeleccionado)==0 ){
        setError((error) => ({...error, aspecto: "Campo Obligatorio" }))
      }else{
        setError((error) => ({...error, aspecto: "" }))
      }
      if(parseInt(importanciaSeleccionada) ==0){
        setError((error) => ({...error, importancia: "Campo Obligatorio" }))
      }else{
        setError((error) => ({...error, importancia: "" }))
      }
      if(isEmpty(descripcion) ){
        setError((error) => ({...error, descripcion: "Campo Obligatorio" }))
      }else{
        setError((error) => ({...error, descripcion: "" }))
      }
      if(isEmpty(ubicacionSeleccionada)){
        setError((error) => ({...error, ubicacion: "Campo Obligatorio" }))
      }else{
        setError((error) => ({...error, ubicacion: "" }))
      }
    }else{
        
      setError({
        aspecto: "",
        importancia: "",
        descripcion: "",
        ubicacion: "",
      })
      const fecha = new Date().toString();
      const objeto = {
        descripcion: descripcion,
        tiempoIncidencia: fecha,
        longitud: ubicacionSeleccionada.latitude,
        latitud: ubicacionSeleccionada.longitude,
        activo: 1,
        comentario: "",
        imagenes: imagenes,
        importancia: parseInt(importanciaSeleccionada),
        estado:1,
        aspecto: parseInt(aspectoSeleccionado),
        usuario: 1,
      }
      
       fetch("http://192.168.0.8:8080/api/incidencia/", { method: "POST", body: JSON.stringify(objeto), headers: { "Content-Type": "application/json" } })
       .then((response)=>{
         if(!response.error){
           console.log("Registro Exitoso")
         }else{
           console.log("No se completo el registro")
         }
       }).catch((error) =>{
         console.log(error);
       })
        
      
      console.log(objeto);
    }
  }

  const getAspectos = async () => {
    const response = await fetch("http://192.168.0.8:8080/api/aspecto/", { method: "GET", headers: { "Content-Type": "application/json" } })
    return response.json()
  }

  const getImportancias = async () => {
    const response = await fetch("http://192.168.0.8:8080/api/importancia/", { method: "GET", headers: { "Content-Type": "application/json" } })
    return response.json()
  }

  useFocusEffect(
    //useCallback ocupa la misma estructura que la de useEffect
    useCallback(() => {
      //con el .then obtenemos el array y lo guardamos en response
      getAspectos().then((response) => {
        setAspectos(response.contenido);
      })
      getImportancias().then((response) => {
        setImportancias(response.contenido);
      })
    }, [])
  )

  const obtenerUbicacion = async (latitude, longitude) => {
    let response = await Location.reverseGeocodeAsync({ latitude, longitude });
    return response
  }

  function Map(props) {
    const { isVisibleMap, setIsVisibleMap, toastRef, setUbicacionSeleccionada } = props
    const [location, setLocation] = useState()
    useEffect(() => {
      (async () => {
        const resultPermission = await Location.requestForegroundPermissionsAsync()
        if (resultPermission.status === "granted") {
          let loc = await Location.getCurrentPositionAsync({})
          setLocation({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          })
          const { latitude, longitude } = location;

          console.log(response);
        } else {
          toastRef.current.show("Es necesario aceptar los permisos de ubbicación")
        }
      })() //para que sea autoejecutable ()
    }, [])
    const confirmLocation = () => {
      let bandera = isDentroUtez(location.latitude, location.longitude);
      if (bandera) {
        obtenerUbicacion(location.latitude, location.longitude)
          .then((response) => {
            console.log(response)
            map(response, (item) => {
              setLugar(item.name)
            })
          })
          setUbicacionSeleccionada(location)
        toastRef.current.show("Ubicación guardada")
      } else {
        toastRef.current.show("La ubicacion no se encuentra dentro de la UTEZ")
      }

      //Para cerrar el modal 
      setIsVisibleMap(false)
    }
    return (
      <Modal
        isVisible={isVisibleMap}
        setIsVisible={setIsVisibleMap}>
        <View>
          {location && (
            <MapView
              style={styles.map}
              initialRegion={location} //ubicación actual de mi usuario
              showsUserLocation={true}
              onRegionChange={(region) => setLocation(region)}//que va a hacer cuando la ubicación cambie
            >
              <MapView.Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude
                }}
                draggable
              />
            </MapView>
          )}
          <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
            <Divider style={styles.divider} />
          </View>
          <View>
            <Button
              title="Cancelar"
              style={styles.btnContainerCancel}
              buttonStyle={styles.btnStyleCancel}
              onPress={() => setIsVisibleMap(false)}
            />
            <Button
              title="Guardar ubicación"
              containerStyle={styles.btnContainerCancel}
              buttonStyle={styles.btnStyleSave}
              onPress={confirmLocation}
            />
          </View>
        </View>
      </Modal>
    )
  }

  const isDentroUtez = (latitud, longitud) => {
    const coordenadasUtez = [
      [18.848725, -99.202692],
      [18.852224, -99.202421],
      [18.853268, -99.200056],
      [18.852378, -99.199289],
      [18.851659, -99.199841],
      [18.851115, -99.199399],
      [18.850123, -99.199640],
      [18.849607, -99.199961],
      [18.849144, -99.199985],
      [18.849098, -99.200385],
      [18.848439, -99.200481]
    ];

    let interseccionesNorte = 0;
    let interseccionesSur = 0;
    for (let i = 0; i < coordenadasUtez.length; i++) {
      // Obtiene un par de puntos de una recta
      let punto1 = coordenadasUtez[i];
      let punto2 = coordenadasUtez[i + 1 < coordenadasUtez.length ? i + 1 : 0];

      // Establece el rango de longitudes que abarca la recta
      let longitudMenor;
      let longitudMayor;
      if (punto1[1] > punto2[1]) {
        longitudMayor = punto1[1];
        longitudMenor = punto2[1];
      } else {
        longitudMayor = punto2[1];
        longitudMenor = punto1[1];
      }

      // Evalúa si las coordenadas ingresadas corresponden a un punto dentro del rango
      if (longitud >= longitudMenor && longitud <= longitudMayor) {
        // Determina la latitud de la intersección
        let latitudInterseccion = ((punto2[0] - punto1[0]) / (punto2[1] - punto1[1])) * (longitud - punto1[1]) + punto1[0];

        // Evalúa si la intersección está al norte o al sur del punto
        if (latitudInterseccion > latitud) interseccionesNorte++;
        else if (latitudInterseccion < latitud) interseccionesSur++;
      }
    }

    // Determina si las coordenadas corresponden a un punto dentro de la figura a partir del número de intersecciones
    return (interseccionesNorte % 2 == 1 && interseccionesSur % 2 == 1);
  }

  const addImage = async () => {
    const resultPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (resultPermission.status !== "denied") {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [3, 2],
        base64: true
      });
      if (!result.cancelled) {
        console.log(result.base64);
        setImagenes([...imagenes, result.base64]);
      } else {
        toastRef.current.show("Has cerrado la galería");
      }
    } else {
      toastRef.current.show(
        "Es necesario aceptar los permisos de cámara.",
        4000
      );
    }
  };



  return (
    <ScrollView >
      <Text>
        Aspecto
        <Icon
          type="material-community"
          name={"gamepad-circle"}
          size={20}
          color="#2f2c79"
        />
      </Text>
      <Picker
        selectedValue={aspectoSeleccionado}
        style={{ height: 60, width: 250, marginTop: 10 }}
        onValueChange={(itemValue, itemIndex) => setAspectoSeleccionado(itemValue)}
        
      >
        {
          map(aspectos, (item, i) => {
            return (<Picker.Item label={item.nombre} value={item.id} key={i} />)
          })
        }
      </Picker>
      <Text>
        Importancia
        <Icon
          type="material-community"
          name={"gamepad-circle"}
          size={20}
          color="#2f2c79"
        />
      </Text>

      <Picker
        selectedValue={importanciaSeleccionada}
        style={{ height: 60, width: 250, marginTop: 10 }}
        onValueChange={(itemValue, itemIndex) => setImportanciaSeleccionada(itemValue)}
      >
        {
          map(importancias, (item, i) => {
            return (<Picker.Item label={item.nombre} value={item.id} key={i} />)
          })
        }
      </Picker>

      <Text style={{ marginTop: 10 }}>
        Descripción
        <Icon
          type="material-community"
          name={"format-align-justify"}
          size={20}
          marginLeft={20}
          color="#2f2c79"
        />
      </Text>
      <TextInput
        style={styles.textI}
        placeholder="Escribe brevemente la incidencia!"
        onChange={(event) => setDescripcion(event.nativeEvent.text)}
      />
      <Text style={{ marginTop: 10 }}>
        Evidencia
        <Icon
          type="material-community"
          name={"camera"}
          size={20}
          marginLeft={20}
          color="#2f2c79"
          onPress={addImage}
        />
      </Text>

      <View style={styles.viewImagenes}>
        {
          size(imagenes) != 0 && map(imagenes, (imagen, index) => (
            <Avatar
              key={index}
              style={styles.miniatureImage}
              source={{ uri: `data:image/jpeg;base64, ${imagen}` }}
            />
          ))
        }
      </View>

      {
        lugar ? <Text>{lugar}</Text> : null
      }
      <Icon
        type="material-community"
        name="google-maps"
        color={ubicacionSeleccionada ? "#00a680" : "#c2c2c2"}
        onPress={() => setIsVisibleMap(true)}
      />

      <Map
        isVisibleMap={isVisibleMap}
        setIsVisibleMap={setIsVisibleMap}
        toastRef={toastRef}
        setUbicacionSeleccionada={setUbicacionSeleccionada}
      />
      
      <Button style={styles.btn}
        title="Guardar"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={registrar}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 40,
    marginBottom: 16,
    marginLeft: 20,
  },
  textI: {
    height: 100,
    width: 380,
  },
  btnContainer: {
    marginTop: 10,
    width: "60%",
    height: 60,
  },
  btn: {
    marginLeft: 10,
    marginBottom: 20,
    color: "#000",
    backgroundColor: "gray",
  },
  map: {
    width: "100%",
    height: 560,
  },
  divider: {
    width: "85%",
    backgroundColor: "#ff5a60",
    marginBottom: 2
  },
  btnContainerCancel: {
    padding: 5,
    marginBottom: 10
  },
  btnStyleCancel: {
    backgroundColor: "#a60a0d"
  },
  btnStyleSave: {
    backgroundColor: "#00a680",
  },
  miniatureImage: {
    height: 70,
    width: 70,
    marginRight: 10,
  },
  viewImagenes: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  }
});

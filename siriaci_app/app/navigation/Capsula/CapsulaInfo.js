import { StyleSheet, Text, View, ScrollView, Dimensions  } from 'react-native'
import React, {useState, useEffect} from 'react'
import MyCarousel from '../../utils/MyCarousel'
import { isArguments } from 'lodash';

const screenWidth = Dimensions.get("window").width

export default function CapsulaInfo(props) {
    const [imagenes, setImagenes] = useState([]);
    console.log(props)
    const { capsula, navigation } = props.route.params
    const {titulo, contenido, imagenesCapsula } = capsula
    
    

    useEffect(() => {
        imagenesCapsula.map((item) =>{
            setImagenes((imagenes) => [...imagenes,item.imagen]);
        })
        console.log(imagenes)
    }, [])
    return (
        <ScrollView style={{backgroundColor: "#FFF"}}>
            <MyCarousel
                arrayImage={imagenes}
                height={250}
                width={screenWidth}
            />
            <TitleHouse
                capsula={capsula}
            />
        </ScrollView>
    )
}

function TitleHouse(props) {
    const { capsula } = props
    const { titulo, contenido} = capsula

    return (
        <View style={styles.containerTitle}>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.titulo}>{titulo}</Text>
            </View>
            <Text style={styles.contenido}>{contenido}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    containerTitle: {
        flex: 1,
        backgroundColor: "#FFF",
        padding: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold"
    },
    contenido: {
        marginTop: 5,
        color: "gray"
    },
})
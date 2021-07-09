import React from "react";
import { View, Text, Image } from "react-native";



const Anuncios = (props) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25 }} source={{ uri: props.item.icon }} />

                <Text style={{ fontWeight: 'bold' }}>
                    {props.item.title}
                </Text>
            </View>
            <Text>
                {props.item.description}
            </Text>
        </View>
    )
}

export default Anuncios;
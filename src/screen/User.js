import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState } from "react/cjs/react.development";


const DATA = [
    {
        "key": "1",
        "title": "Faca Matches mais rapido",
        "description": "1 boost gratuito A cada mes",
        "icon": "https://img.icons8.com/color/48/000000/lightning-bolt.png"
    },
    {
        "key": "2",
        "title": "Chame mais atencao com os superlikes",
        "description": "Voce tera 3X mais chance de dar um Match!",
        "icon": "https://img.icons8.com/material-rounded/96/4a90e2/star--v1.png"
    },
    {
        "key": "3",
        "title": "Curta perfis mundo afora",
        "description": "Passaporte para qualquer lugar com tinder plus",
        "icon": "https://img.icons8.com/ios-filled/50/4a90e2/marker-o.png"
    },
    {
        "key": "4",
        "title": "Controle seu perfil",
        "description": "Limite o que os outros veem sobre voce",
        "icon": "https://img.icons8.com/office/80/4a90e2/remove-key.png"
    },
    {
        "key": "5",
        "title": "Use o voltar para curtir ou ignorar",
        "description": "Volte quantas vezes quiser com TinderPlus",
        "icon": "https://img.icons8.com/ios-glyphs/30/4a90e2/undo.png"
    }
]


const User = () => {

    const [index, setIndex] = useState(0)

    return (
        <View style={styles.screen}>
            <View style={styles.profile}>
                <Image style={styles.profileImg} source={{ uri: 'https://avaazdo.s3.amazonaws.com/original_5bdede30ca834.png' }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.profileTitle}>
                        Dreivao, 25
                    </Text>
                    <Icon name="checkcircleo" size={20} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <Text>
                        Carrasco
                    </Text>
                    <Text>
                        Colegio estadual de Noxus
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                        <View style={[styles.icons, { marginLeft: 110 }]}>
                            <Icon name="setting" size={35} />
                            <Text style={{ fontSize: 10 }}>
                                CONFIGURACOES
                            </Text>
                        </View>
                        <View style={[styles.icons, { marginTop: 40 }]}>
                            <Icon name="camera" size={35} />
                            <Text style={{ fontSize: 10 }}>
                                ADD MIDIA
                            </Text>
                        </View>
                        <View style={styles.icons}>
                            <Icon name="edit" size={35} />
                            <Text style={{ fontSize: 10 }}>
                                EDITAR INFO
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.anuncios}>
                <Carousel
                    data={DATA}
                    autoplay={true}
                    loop={true}
                    onSnapToItem={(index) => setIndex(index)}
                    renderItem={({ item }) => {
                        return <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 25, height: 25 }} source={{ uri: item.icon }} />

                                <Text>
                                    {item.title}
                                </Text>
                            </View>
                            <Text>
                                {item.description}
                            </Text>
                        </View>
                    }}
                    sliderWidth={300}
                    itemWidth={300}
                />
                <View style={{ width: 50, height: 30, marginBottom: 15 }}>
                    <Pagination
                        dotsLength={DATA.length}
                        activeDotIndex={index}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 8,
                            backgroundColor: 'rgba(0, 0, 0, 0.92)'
                        }}

                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                </View>
                <TouchableOpacity style={styles.btnTinderPlus}>
                    <Text style={{ fontWeight: 'bold', color: '#FE3C72' }}>
                        Meu tinder Plus
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column"
    },
    profile: {
        padding: 50,
        alignItems: "center",
        backgroundColor: '#fff',
        flex: 2.3,
        borderBottomRightRadius: 150,
        borderBottomLeftRadius: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

    },
    anuncios: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 10
    },
    profileImg: {
        width: 130,
        height: 130,
        borderRadius: 100
    },
    profileTitle: {
        padding: 5,
        fontSize: 30
    },
    icons:
    {
        height: 75,
        width: 90,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 40,

    },
    btnTinderPlus: {
        shadowColor: "#000",
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        width: 200,
        justifyContent: "center",
        alignItems: 'center',
        height: 40,
        borderRadius: 30,
        marginBottom: 13
    }
})



export default User
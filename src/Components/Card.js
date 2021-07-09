import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({ pessoa }) => (

    <ImageBackground style={styles.img} source={{ uri: pessoa.img }}>
        <View style={styles.info}>
            <View style={styles.title}>
                <Text style={styles.nome}>
                    {pessoa.nome}

                </Text>
                <Text style={styles.idade}>
                    {pessoa.idade}
                </Text>
            </View>
            <View style={styles.descricaoArea}>
                <View>
                    <Text style={styles.bio}>
                        <Icon name="ios-bookmarks-outline" size={20} color="#000" /> {pessoa.bio}

                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="ios-location-outline" size={20} color="#000" />

                        <Text style={styles.distancia}>
                            {pessoa.distancia}

                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnInfo} >
                    <Text style={styles.iconInfo}>
                        i
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>

)

const styles = StyleSheet.create({

    img: {
        flex: 0.9,
        overflow: 'hidden',
        borderRadius: 7,
        justifyContent: 'flex-end',
        shadowRadius: 25,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0 },
        position: 'relative',
        bottom: 45
    },
    profile: {
        flex: 1
    },
    nome: {
        color: 'white',
        fontSize: 40
    },
    bio: {
        color: 'white',
        fontSize: 16,
        paddingBottom: 2
    },
    distancia: {
        color: 'white'
    },
    info: {
        padding: 15,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    idade: {
        fontSize: 25,
        color: 'white',

        paddingLeft: 10
    },
    btnInfo: {
        width: 25,
        height: 25,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconInfo: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    descricaoArea: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})

export default Card;
import React from "react";
import { View, Image } from 'react-native'

const Chat = () => {
    return (
        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../icon/images.png')} />
        </View>
    )
}

export default Chat
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


const GopayFeature = ({title, img, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ flex: 1, alignItems: 'center' }]}>
            <Image source={img} style={[{ width: 36 }]} />
            <Text style={[{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15 }]}>{title}</Text>
        </TouchableOpacity>
    )
};

export default GopayFeature;
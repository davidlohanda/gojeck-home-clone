import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';


const NavBarIcon = ({title, img, active, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
            <Image source={img} style={[{ height: 26, width: 26 }]} />
            <Text style={[{ fontSize: 10, color: active ? '#43ab4a' : '#545454' }]}>{title}</Text>
        </TouchableOpacity>
    )
};

export default NavBarIcon;
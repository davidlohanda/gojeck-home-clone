import React from 'react';
import { View, Text, Image } from 'react-native';


const ScrollableItem = ({title, img}) => {
    return (
        <View style={[{ marginRight: 16 }]}>
            <View style={[{ height: 150, width: 150, backgroundColor: 'pink', borderRadius: 10 }]}>
                <Image source={img} style={[{ height: undefined, width: undefined, resizeMode: 'cover', borderRadius: 10, flex: 1 }]} />
            </View>
            <Text style={[{ fontSize: 16, color: '#1c1c1c', fontWeight: 'bold', marginTop: 12 }]}>{title}</Text>
        </View>
    )
};

export default ScrollableItem;
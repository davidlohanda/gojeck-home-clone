import React from 'react';
import { View, Text, Image } from 'react-native';


const MainFeature = ({title, img}) => {
    return (
        <View style={[{ width: '25%', alignItems: 'center', marginBottom: 18 }]}>
            <View style={[{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }]}>
                <Image source={img} />
            </View>
            <Text style={[{ fontSize: 11, fontWeight: 'bold', textAlign:'center', marginTop: 6 }]}>{title}</Text>
        </View>
    )
};

export default MainFeature;
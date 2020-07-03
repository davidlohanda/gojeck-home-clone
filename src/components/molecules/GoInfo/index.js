import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


const GoInfo = () => {
    return (
        <View style={[{ padding: 16, paddingBottom: 0 }]}>
            <View style={[{ height: 15, width: 60, marginLeft: -4 }]}>
                <Image source={require('../../../assets/logo/gojek.png')} style={[{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }]} />
            </View>
            <Text style={[{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c', marginTop: 15, marginBottom: 20 }]}>Complete Your Profile</Text>
            <View style={[{ flexDirection: 'row', marginBottom: 16 }]}>
                <View>
                <Image source={require('../../../assets/dummy/facebook-connect.png')} />
                </View>
                <View style={[{ marginLeft: 16, flex: 1 }]}>
                <Text style={[{ fontSize: 15, color: '#4a4a4a', fontWeight: 'bold' }]}>Connect with Facebook</Text>
                <Text style={[{ fontSize: 15, color: '#4a4a4a', fontWeight: 'normal', width: '70%' }]}>Login in faster without verification code</Text>
                </View>
            </View>
            <TouchableOpacity style={[{ backgroundColor: '#61a576', paddingHorizontal: 12, paddingVertical: 12, alignSelf: 'flex-end', borderRadius: 4  }]}>
                <Text style={[{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'  }]}>CONNECT</Text>
            </TouchableOpacity>
            <View style={[ {borderBottomWidth: 1, borderColor: '#e8e9ed', marginTop: 16  }]}></View>
        </View>
    )
};

export default GoInfo;
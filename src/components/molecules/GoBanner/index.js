import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


const GoBanner = () => {
    return (
        <View style={[{ padding: 16, paddingBottom: 0 }]}>
            <View style={[{ position: 'relative' }]}>
                <Image source={require('../../../assets/dummy/food-banner.jpg')} style={[{ height: 170, width: '100%', borderRadius: 6 }]} />
                <View style={[{ height: '100%', width: '100%', backgroundColor: 'black', position: 'absolute', borderRadius: 6, opacity: 0.15 }]}></View>
                <View style={[{ height: 15, width: 55, position: 'absolute', top: 16, left: 16  }]}>
                  <Image source={require('../../../assets/logo/white.png')} style={[{ resizeMode: 'contain', flex: 1, height: undefined, width: undefined }]} />
                </View>
                <View style={[{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16 }]}>
                  <View>
                    <Text style={[{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 }]}>Free GO-FOOD voucher</Text>
                    <Text style={[{ fontSize: 12, fontWeight: '400', color: 'white' }]}>Quick, before they run out!</Text>
                  </View>
                  <View style={[{ flex: 1, paddingLeft: 12 }]}>
                    <TouchableOpacity style={[{ backgroundColor: '#61a576', paddingHorizontal: 12, paddingVertical: 12, alignSelf: 'stretch', borderRadius: 4  }]}>
                      <Text style={[{ fontSize: 10, fontWeight: 'bold', color: 'white', textAlign: 'center'  }]}>GET VOUCHER</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
            <View style={[ {borderBottomWidth: 1, borderColor: '#e8e9ed', marginTop: 16 }]}></View>
          </View>
    )
};

export default GoBanner;
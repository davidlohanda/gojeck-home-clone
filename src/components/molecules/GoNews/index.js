import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


const GoNews = ({ onPress }) => {
    return (
        <View style={[{ padding: 16, paddingBottom: 0 }]}>
            <View style={[{ position: 'relative' }]}>
              <Image source={require('../../../assets/dummy/sepak-bola.jpg')} style={[{ height: 170, width: '100%', borderRadius: 6 }]} />
              <View style={[{ height: '100%', width: '100%', backgroundColor: 'black', position: 'absolute', opacity: 0.2, borderRadius: 6 }]}></View>
              <View style={[{ height: 15, width: 55, position: 'absolute', top: 16, left: 16  }]}>
                <Image source={require('../../../assets/logo/white.png')} style={[{ resizeMode: 'contain', flex: 1, height: undefined, width: undefined }]} />
              </View>
            </View>
            <View style={[{ paddingTop: 16 }]}>
              <Text style={[{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c' }]}>GO-NEWS</Text>
              <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7a7a7a', marginBottom: 11  }}>Dimas Drajat selamatkan pinalti, Timnas U-23 berhasil memenangkan ASEAN GAMES</Text>
              <TouchableOpacity onPress={onPress} style={[{ backgroundColor: '#61a576', paddingHorizontal: 12, paddingVertical: 12, alignSelf: 'flex-end', borderRadius: 4  }]}>
                <Text style={[{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'  }]}>READ</Text>
              </TouchableOpacity>
            </View>
            <View style={[ {borderBottomWidth: 1, borderColor: '#e8e9ed' , marginTop: 16 }]}></View>
          </View>
    )
};

export default GoNews;
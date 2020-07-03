import React from 'react';
import { View, TextInput, Image } from 'react-native';


const SearchFeature = ({title, img}) => {
    return (
        <View style={[{ marginHorizontal: 17, flexDirection: 'row', alignItems: 'center' }]}>
            <View style={[{ position: 'relative', flex: 1 }]}>
              <TextInput placeholder="What do you want to eat?" style={[{ backgroundColor: 'white', fontSize: 13, borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, height: 40, paddingLeft: 45, paddingRight: 20, marginRight: 10 }]} />
              <Image source={require('../../../assets/icon/search.png')} style={[{ position: 'absolute', top: 5, left: 12 }]} />
            </View>
            <Image source={require('../../../assets/icon/promo.png')} style={[{ width: 35 }]} />
        </View>
    )
};

export default SearchFeature;
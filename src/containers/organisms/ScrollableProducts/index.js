import React, { Component } from 'react';
import { View, ScrollView, Text, Image  } from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProducts extends Component {
    render() {
        return (
            <View style={[{ padding: 16 }]}>
                <View style={[{ height: 15, width: 60 }]}>
                    <Image source={require('../../../assets/logo/go-food.png')} style={[{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }]} />
                </View>
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }]}>
                    <Text style={[{ fontSize: 17, color: '#1c1c1c', fontWeight: 'bold' }]}>Nearby Restaurant</Text>
                    <Text style={[{ fontSize: 17, color: '#61a756', fontWeight: 'bold' }]}>See All</Text>
                </View>
                <ScrollView horizontal style={[{ flexDirection: 'row' }]}>
                    <ScrollableItem title="KFC AEON MALL" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                    <ScrollableItem title="BAKMI GM AEON MALL" img={require('../../../assets/dummy/go-food-gm.jpg')} />
                    <ScrollableItem title="MARTABAK ORINS" img={require('../../../assets/dummy/go-food-orins.jpg')} />
                    <ScrollableItem title="MARTABAK BANKA" img={require('../../../assets/dummy/go-food-banka.jpg')} />
                    <ScrollableItem title="AYAM BAKAR PAK BOSS" img={require('../../../assets/dummy/go-food-pak-boss.jpg')} />
                </ScrollView>
                <View style={[ {borderBottomWidth: 1, borderColor: '#e8e9ed' , marginTop: 16 }]}></View>
            </View>
        )
    }
}

export default ScrollableProducts;
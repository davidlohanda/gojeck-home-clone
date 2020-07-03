import React, { Component } from 'react';
import { View , Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import GopayFeature from '../../../components/molecules/GopayFeature';

class HomeGoPay extends Component {
    render() {
        return (
            <View style={[{ marginHorizontal: 17, marginTop: 8 }]}>
                <View style={[{ backgroundColor: '#2c5fB8', flexDirection: 'row', justifyContent: 'space-between', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }]}>
                    <Image source={require('../../../assets/icon/gopay.png')} />
                    <Text style={[{ fontSize: 17, color: 'white', fontWeight: 'bold' }]}>Rp50.000</Text>
                </View>
                <View style={[{ flexDirection: 'row', paddingTop: 30, paddingBottom: 14,backgroundColor: '#2f65bd', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }]}>
                    <GopayFeature onPress={() => this.props.navigation.navigate('ScanQrCode')} title="Pay" img={require('../../../assets/icon/pay.png')} />
                    <GopayFeature title="Nearby" img={require('../../../assets/icon/nearby.png')} />
                    <GopayFeature title="Top Up" img={require('../../../assets/icon/topup.png')} />
                    <GopayFeature title="More" img={require('../../../assets/icon/more.png')} />
                </View>
            </View>
        )
    }
}

export default withNavigation(HomeGoPay);
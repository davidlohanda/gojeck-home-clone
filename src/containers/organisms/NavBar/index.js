import React, { Component } from 'react';
import { View  } from 'react-native';
import { withNavigation } from 'react-navigation';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

class NavBar extends Component {
    render() {
        console.log(this.props.navigation);
        return (
            <View style={[{ height: 54, flexDirection: 'row', backgroundColor: 'white', borderTopWidth: 1, borderColor: '#ececec' }]}>
                <NavBarIcon onPress={() => this.props.navigation.navigate('Home')} title="Home" img={require('../../../assets/icon/home-active.png')} active />
                <NavBarIcon onPress={() => this.props.navigation.navigate('Orders')} title="Orders" img={require('../../../assets/icon/order.png')} />
                <NavBarIcon onPress={() => this.props.navigation.navigate('')} title="Help" img={require('../../../assets/icon/help.png')} />
                <NavBarIcon onPress={() => this.props.navigation.navigate('')} title="Inbox" img={require('../../../assets/icon/inbox.png')} />
                <NavBarIcon onPress={() => this.props.navigation.navigate('')} title="Account" img={require('../../../assets/icon/account.png')} />
            </View>
        )
    }
}

export default withNavigation(NavBar);
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/GoInfo';
import GoBanner from '../../../components/molecules/GoBanner';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';
import NavBar from '../../../containers/organisms/NavBar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';

class Home extends Component {
    render() {
        return(
            <View style={[{ flex: 1 }]}>
                <ScrollView style={[{ flex: 1, backgroundColor: 'white', paddingTop: 15 }]}>
                <SearchFeature />
                <HomeGoPay />
                <HomeMainFeature />
                <View style={[{ height: 17, backgroundColor: '#f2f2f4', marginTop: 20 }]}></View>
                <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')} />
                <GoInfo />
                <GoBanner />
                <ScrollableProducts />
                </ScrollView>
                <NavBar />
            </View>
        )   
    }
}

export default Home;
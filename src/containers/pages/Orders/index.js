import React from 'react';
import { View, Text, Button } from 'react-native';
import NavBar from '../../organisms/NavBar';

const Orders = (props) => {
    return (
        <View style={[{ flex: 1 }]}>
            <View style={[{ flex: 1 }]}>
                <Text>Orders</Text>
                <Button title="Order Detail" onPress={() => props.navigation.navigate('OrderDetail')} />
            </View>
            <NavBar />
        </View>
    )
}

export default Orders;

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, NewsDetail, Orders, OrderDetail, ScanQrCode } from '../../containers/pages';



const HomeStack = createStackNavigator({
    Home,
    NewsDetail,
}, {
    initialRouteName: 'Home',
    headerMode: 'none',
});

const OrdersStack = createStackNavigator({
    Orders,
    OrderDetail,
}, {
    initialRouteName: 'Orders',
    headerMode: 'none',
});

const ScanStack = createStackNavigator({
    ScanQrCode,
}, {
    initialRouteName: 'ScanQrCode',
    headerMode: 'none',
});

const Router = createSwitchNavigator({
    HomeStack,
    OrdersStack,
    ScanStack,
}, {
    initialRouteName: 'ScanStack',
    headerMode: 'none',
})

export default createAppContainer(Router);
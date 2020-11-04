import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Search from './pages/Search/Search';
import Community from './pages/Community/Community';
import Friends from './pages/Friends/Friends';
import PersonalCenter from './pages/PersonalCenter/PersonalCenter';
import Icon from '@ant-design/react-native/lib/icon';
import indexModel from './models/index';
import {Provider} from 'react-redux';
import {create} from 'dva-core-ts';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

const models: any = [indexModel];

const app = create();

models.forEach((o: any) => {
  // 装载models对象
  app.model(o);
});

app.start(); // 实例初始化

const store = app._store; // 获取redux的store对象供react-redux使用

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName: any;

                if (route.name === '首页') {
                  iconName = focused ? 'home' : 'home';
                } else if (route.name === '搜索') {
                  iconName = focused ? 'search' : 'search';
                } else if (route.name === '社区') {
                  iconName = focused ? 'instagram' : 'instagram';
                } else if (route.name === '好友') {
                  iconName = focused ? 'team' : 'team';
                } else {
                  iconName = focused ? 'user' : 'user';
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="首页" component={HomePage} />
            <Tab.Screen name="搜索" component={Search} />
            <Tab.Screen name="社区" component={Community} />
            <Tab.Screen name="好友" component={Friends} />
            <Tab.Screen name="购物车" component={ShoppingCart} />
            <Tab.Screen name="我的淘宝" component={PersonalCenter} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
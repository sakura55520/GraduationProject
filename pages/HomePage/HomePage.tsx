import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '@ant-design/react-native/lib/search-bar';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import Swiper from 'react-native-swiper';
import {createStackNavigator} from '@react-navigation/stack';
import CommodityDetail from '../CommodityDetail';
import Icon from '@ant-design/react-native/lib/icon';
import Commodity from '../../components/Commodity';

const Stack = createStackNavigator();
const Home = ({navigation}: {navigation: any}) => {
  const commoditys = [];
  for (let i = 0; i < 10; i++) {
    commoditys.push(
      <Commodity navigation={navigation} key={i} title={i.toString()} />,
    );
  }
  return (
    <>
      <SearchBar defaultValue="" placeholder="搜索" />
      <ScrollView style={{flex: 1}}>
        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <WingBlank style={{marginBottom: 5}}>
          <Flex justify="around">
            <Icon name="account-book" size="sm" />
            <Icon name="account-book" size="sm" />
            <Icon name="account-book" size="sm" />
            <Icon name="account-book" size="sm" />
            <Icon name="account-book" size="sm" />
          </Flex>
          <Flex justify="around">
            <Icon name="account-book" size="sm" />
            <Icon name="account-book" size="sm" />
            <Icon name="account-book" size="sm" />
            <Icon name="account-book" size="sm" />
            <Icon name="account-book" size="sm" />
          </Flex>
        </WingBlank>
        <WingBlank size="lg">
          <Flex wrap="wrap" justify="around">
            {commoditys}
          </Flex>
        </WingBlank>
      </ScrollView>
    </>
  );
};
const HomePage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="首页" component={Home} />
      <Stack.Screen name="商品" component={CommodityDetail} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomePage;

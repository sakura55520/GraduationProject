import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import SearchBar from '@ant-design/react-native/lib/search-bar';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import Swiper from 'react-native-swiper';
import {createStackNavigator} from '@react-navigation/stack';
import CommodityDetail from '../CommodityDetail';
import Icon from '@ant-design/react-native/lib/icon';
import Commodity from '../../components/Commodity';
import Card from '@ant-design/react-native/lib/card';
import WhiteSpace from '@ant-design/react-native/lib/white-space';

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
          <View style={styles.slider}>
            <Image
              source={require('../../assets/pic2.jpg')}
              style={styles.sliderImg}
            />
          </View>
          <View style={styles.slider}>
            <Image
              source={require('../../assets/pic2.jpg')}
              style={styles.sliderImg}
            />
          </View>
          <View style={styles.slider}>
            <Image
              source={require('../../assets/pic2.jpg')}
              style={styles.sliderImg}
            />
          </View>
        </Swiper>
        <WhiteSpace />
        <WingBlank style={{marginBottom: 5}}>
          <Card>
            <Flex justify="around" style={styles.icon}>
              <Icon name="account-book" size="sm" />
              <Icon name="account-book" size="sm" />
              <Icon name="account-book" size="sm" />
              <Icon name="account-book" size="sm" />
              <Icon name="account-book" size="sm" />
            </Flex>
            <Flex justify="around" style={styles.icon}>
              <Icon name="account-book" size="sm" />
              <Icon name="account-book" size="sm" />
              <Icon name="account-book" size="sm" />
              <Icon name="account-book" size="sm" />
              <Icon name="account-book" size="sm" />
            </Flex>
          </Card>
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
  slider: {
    flex: 1,
  },
  sliderImg: {
    width: undefined,
    height: 300,
    resizeMode: 'stretch',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginTop: 5,
    marginBottom: 5,
  },
});
export default HomePage;

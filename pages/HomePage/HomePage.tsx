import React, {useEffect} from 'react';
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
import {connect} from 'react-redux';
import GuidePage from '../GuidePage/GuidePage';

const Stack = createStackNavigator();
const Home = ({navigation}: {navigation: any}) => {
  const commoditys = [];
  for (let i = 0; i < 10; i++) {
    commoditys.push(
      <Commodity navigation={navigation} key={i} title={i.toString()} />,
    );
  }
  const categories = [
    '上装',
    '下装',
    '鞋靴',
    '数码',
    '手机',
    '美妆',
    '电器',
    '食品',
    '饰品',
    '医药',
  ];
  return (
    <>
      <SearchBar defaultValue="" placeholder="搜索" />
      <ScrollView style={{flex: 1}}>
        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
          <View style={styles.slider}>
            <Image
              source={require('../../assets/ava.jpg')}
              style={styles.sliderImg}
            />
          </View>
          <View style={styles.slider}>
            <Image
              source={require('../../assets/ava.jpg')}
              style={styles.sliderImg}
            />
          </View>
          <View style={styles.slider}>
            <Image
              source={require('../../assets/ava.jpg')}
              style={styles.sliderImg}
            />
          </View>
        </Swiper>
        <WhiteSpace />
        <WingBlank style={{marginBottom: 5}}>
          <Card>
            <Flex wrap="wrap" justify="around" style={styles.icon}>
              {categories.map((category: string) => (
                <View style={styles.category} key={category}>
                  <Icon name="account-book" size="sm" />
                  <Text>{category}</Text>
                </View>
              ))}
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

interface HomePageProps {
  guide: any;
  dispatch: any;
}

const HomePage = (props: HomePageProps) => {
  // useEffect(() => {
  //   props.dispatch({
  //     type: 'guide/setLoading',
  //     payload: true,
  //   });
  //   setTimeout(() => {
  //     props.dispatch({
  //       type: 'guide/setLoading',
  //       payload: false,
  //     });
  //   }, 3000);
  // }, []);
  return (
    <>
      {props.guide.loading ? <GuidePage /> : null}
      <Stack.Navigator>
        <Stack.Screen name="首页" component={Home} />
        <Stack.Screen name="商品" component={CommodityDetail} />
      </Stack.Navigator>
    </>
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
  category: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    padding:5
  },
});
export default connect((state: any) => ({
  guide: state.guide,
}))(HomePage);

import React from 'react';
import {ScrollView} from 'react-native';
import SearchBar from '@ant-design/react-native/lib/search-bar';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import Commodity from '../../components/Commodity';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import { createStackNavigator } from '@react-navigation/stack';
import CommodityDetail from '../CommodityDetail';

const Stack = createStackNavigator();
const Search = ({navigation}: {navigation: any}) => {
  const commoditys = [];
  for (let i = 0; i < 10; i++) {
    commoditys.push(<Commodity navigation={navigation} key={i} title={i.toString()}/>);
  }
  return (
    <>
      <SearchBar defaultValue="" placeholder="搜索" />
      <ScrollView style={{flex: 1}}>
        <WingBlank size="sm">
          <Flex wrap="wrap" justify="around">
            {commoditys}
          </Flex>
        </WingBlank>
      </ScrollView>
    </>
  );
};
const SearchPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="搜索" component={Search} />
      <Stack.Screen name="商品" component={CommodityDetail} />
    </Stack.Navigator>
  );
};
export default SearchPage;

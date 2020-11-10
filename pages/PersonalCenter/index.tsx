import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CommodityDetail from '../CommodityDetail';
import PersonalCenter from './PersonalCenter';

const Stack = createStackNavigator();
const PersonalCenterPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="个人中心" component={PersonalCenter} />
      <Stack.Screen name="全部订单" component={CommodityDetail} />
      <Stack.Screen name="商品" component={CommodityDetail} />
      <Stack.Screen name="地址管理" component={CommodityDetail} />
      <Stack.Screen name="实名认证" component={CommodityDetail} />
      <Stack.Screen name="我的收藏" component={CommodityDetail} />
      <Stack.Screen name="支付方式" component={CommodityDetail} />
      <Stack.Screen name="联系客服" component={CommodityDetail} />
    </Stack.Navigator>
  );
};

export default PersonalCenterPage;

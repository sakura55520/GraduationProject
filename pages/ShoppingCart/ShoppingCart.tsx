import Switch from '@ant-design/react-native/lib/switch';
import Card from '@ant-design/react-native/lib/card';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {scaleSizeW} from '../../utils/screen';
import CommodityDetail from '../CommodityDetail';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import Button from '@ant-design/react-native/lib/button';

const Stack = createStackNavigator();

const ShoppingCart = ({navigation}: {navigation: any}) => {
  const [SelectAll, setSelectAll] = useState(false);
  const chatboxs = [];
  for (let i = 0; i < 10; i++) {
    chatboxs.push(
      <TouchableOpacity onPress={() => navigation.navigate('商品')} key={i}>
        <Card style={styles.shoppingList}>
          <Image
            source={require('../../assets/ava.jpg')}
            style={styles.friendAvatar}
          />
        </Card>
      </TouchableOpacity>,
    );
  }
  const onSwitchChange = (value: boolean) => {
    setSelectAll(value);
  };
  return (
    <>
      <ScrollView style={{flex: 1}}>
        <Card style={styles.usercard}>
          <Card.Body>
            <Image
              source={require('../../assets/ava.jpg')}
              style={styles.friendAvatar}
            />
            <Text>未登录</Text>
          </Card.Body>
        </Card>
        <View>{chatboxs}</View>
      </ScrollView>
      <Flex justify="between" style={{height: 50}}>
        <Flex>
          <Switch checked={SelectAll} onChange={onSwitchChange} />
          <Text>全选</Text>
        </Flex>
        <Flex>
          <Text style={{marginRight: 5}}>合计: 0 元</Text>
          <Button
            type="primary"
            style={{borderRadius: 15, height: 30, marginRight: 5}}>
            结算
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

const ShoppingCartPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="购物车" component={ShoppingCart} />
      <Stack.Screen name="商品" component={CommodityDetail} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  usercard: {
    marginTop: 10,
    height: 120,
    marginBottom: 10,
  },
  friendAvatar: {
    width: scaleSizeW(100),
    aspectRatio: 1,
    height: undefined,
    marginLeft: '2%',
    borderRadius: scaleSizeW(50),
  },
  shoppingList: {
    height: 200,
    marginBottom: 20,
  },
});
export default ShoppingCartPage;

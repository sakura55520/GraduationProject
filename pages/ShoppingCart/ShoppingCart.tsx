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
import CommodityDetail from '../CommodityDetail';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import Button from '@ant-design/react-native/lib/button';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import RadioView from '../../components/RadioView';

const Stack = createStackNavigator();

const ShoppingCart = ({navigation}: {navigation: any}) => {
  const [SelectAll, setSelectAll] = useState(false);
  const chatboxs = [];
  for (let i = 0; i < 10; i++) {
    chatboxs.push(
      <Card style={styles.shoppingList} key={i}>
        <Flex justify="start">
          <View style={{padding: 15}}>
            <RadioView />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('商品')}
            style={{width: '90%'}}>
            <Flex justify="between">
              <Image
                source={require('../../assets/pic2.jpg')}
                style={styles.pic}
              />
              <View>
                <Text style={{marginBottom: 20}}>iphone12</Text>
                <Text style={{marginBottom: 20}}>黑色;L</Text>
                <Text>&yen;118</Text>
              </View>
              <View style={{marginRight: 20}}>
                <Text>&times;1</Text>
              </View>
            </Flex>
          </TouchableOpacity>
        </Flex>
      </Card>,
    );
  }
  const onSwitchChange = (value: boolean) => {
    setSelectAll(value);
  };
  return (
    <>
      <ScrollView style={{flex: 1}}>
        <Flex style={styles.usercard} justify="between">
          <Flex>
            <Text style={{marginLeft: 5}}>共0件宝贝</Text>
            <Text style={{marginLeft: 10}}>收货地址：123</Text>
          </Flex>
          <Text style={{marginRight: 5}}>管理</Text>
        </Flex>
        <WingBlank size="sm">
          <View>{chatboxs}</View>
        </WingBlank>
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
    height: 50,
  },
  pic: {
    width: '30%',
    height: 150,
    resizeMode: 'cover',
  },
  shoppingList: {
    justifyContent: 'center',
    height: 200,
    marginBottom: 5,
    borderRadius: 10,
  },
});
export default ShoppingCartPage;

import Card from '@ant-design/react-native/lib/card';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface CommodityProps {
  navigation: any;
  title: string;
}
const Commodity = (props: CommodityProps) => (
  <TouchableOpacity
    onPress={() => props.navigation.navigate('商品')}
    style={styles.commodity}>
    <Card>
      <View>
        <Image source={require('../assets/pic2.jpg')} style={styles.img} />
      </View>
      <View style={{padding: 5}}>
        <Text>韩国东大门 北京天安门潮牌</Text>
        <Text>潮流 | INS</Text>
        <Flex style={{justifyContent: 'space-between'}}>
          <Text>1999.00</Text>
          <Text>2000人付款</Text>
          <Text>杭州</Text>
        </Flex>
      </View>
    </Card>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  commodity: {
    width: '50%',
    padding: 3,
  },
  img: {
    width: undefined,
    height: 300,
    resizeMode: 'stretch',
  },
});

export default Commodity;

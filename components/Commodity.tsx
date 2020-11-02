import Card from '@ant-design/react-native/lib/card';
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
      <Card.Header title="韩国东大门 北京天安门潮牌" extra="" />
      <Card.Body>
        <View>
          <Image source={require('../assets/pic2.jpg')} style={styles.img} />
        </View>
      </Card.Body>
      <Card.Footer content="韩国东大门 北京天安门潮牌" extra="" />
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

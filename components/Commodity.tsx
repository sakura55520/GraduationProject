import Card from '@ant-design/react-native/lib/card';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface CommodityProps {
  navigation: any;
  title:string;
}
const Commodity = (props: CommodityProps) => (
  <TouchableOpacity onPress={() => props.navigation.navigate('商品')}>
    <Card style={styles.commodity}>
      <Card.Header
        title="iphone11"
        thumbStyle={{width: 30, height: 30}}
        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        extra=""
      />
      <Card.Body>
        <View style={{height: 42}}>
<Text style={{marginLeft: 16}}>Card Content{props.title}</Text>
        </View>
      </Card.Body>
      <Card.Footer content="iphone11热卖" extra="" />
    </Card>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  commodity: {
    width: 200,
    marginBottom:5
  },
});

export default Commodity;

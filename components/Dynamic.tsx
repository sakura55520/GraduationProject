import Card from '@ant-design/react-native/lib/card';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface CommodityProps {
  navigation: any;
}
const Dynamic = (props: CommodityProps) => (
  <TouchableOpacity
    onPress={() => props.navigation.navigate('动态')}
    style={styles.dynamic}>
    <Card>
      <View>
        <Image source={require('../assets/pic.jpg')} style={styles.img} />
      </View>
      <Text>这件衣服好看 爱了爱了             500❤</Text>
    </Card>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  dynamic: {
    width: '50%',
    padding: 3,
  },
  img: {
    width: undefined,
    height: 300,
    resizeMode: 'stretch',
  },
});

export default Dynamic;

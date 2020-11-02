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
      <Card.Body>
        <View>
          <Image
            source={require('../assets/pic.jpg')}
            style={styles.img}
          />
        </View>
      </Card.Body>
      <Card.Footer content="这件衣服真好看 爱了爱了" extra="" />
    </Card>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  dynamic: {
    width: '50%',
    padding: 3,
  },
  img: {
    width:undefined,
    height: 300,
    resizeMode:'stretch'
  },
});

export default Dynamic;

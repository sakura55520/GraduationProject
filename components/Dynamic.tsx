import Card from '@ant-design/react-native/lib/card';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scaleSizeW} from '../utils/screen';

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
      <Flex style={styles.user}>
        <View>
          <Flex>
            <Image source={require('../assets/ava.jpg')} style={styles.ava} />
            <Text style={{marginLeft: '3%'}}>龙泽球</Text>
          </Flex>
        </View>
        <Text>1.0万粉丝</Text>
        <Text>500❤</Text>
      </Flex>
      <Text style={{marginLeft: 8, marginBottom: '2%'}}>
        这件衣服好看 爱了爱了
      </Text>
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
  ava: {
    width: scaleSizeW(50),
    aspectRatio: 1,
    height: undefined,
    borderRadius: scaleSizeW(25),
  },
  user: {
    padding: 5,
    justifyContent: 'space-between',
  },
});

export default Dynamic;

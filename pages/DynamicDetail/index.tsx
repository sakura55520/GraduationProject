import Swiper from 'react-native-swiper';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '@ant-design/react-native/lib/card';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import WhiteSpace from '@ant-design/react-native/lib/white-space';
import {scaleSizeW} from '../../utils/screen';

const DynamicDetail = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={4}>
        <View>
          <Text>123</Text>
        </View>
      </Swiper>
      <WingBlank size="sm">
        <TouchableOpacity onPress={() => navigation.navigate('商品')}>
          <Card
            style={{
              height: 100,
              justifyContent: 'center',
            }}>
            <Flex>
              <Image
                source={require('../../assets/pic2.jpg')}
                style={styles.img}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20}}>&yen;118</Text>
                <Text>韩国东大门 北京天安门潮牌</Text>
              </View>
            </Flex>
          </Card>
        </TouchableOpacity>
        <WhiteSpace />
        <Card>
          <View style={{marginLeft: 10}}>
            <Text style={{marginTop: 5}}>666</Text>
            <Flex>
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.avatar}
              />
              <Text style={{marginLeft: 5}}>龙泽球</Text>
            </Flex>
            <Text style={{marginTop: 5}}>666</Text>
          </View>
        </Card>
      </WingBlank>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 400,
  },
  listtext: {
    marginLeft: 20,
  },
  avatar: {
    width: scaleSizeW(50),
    aspectRatio: 1,
    height: undefined,
    borderRadius: scaleSizeW(25),
  },
  img: {
    width: '15%',
    aspectRatio: 1,
    height: undefined,
    resizeMode: 'cover',
    marginLeft: 10,
  },
});
export default DynamicDetail;

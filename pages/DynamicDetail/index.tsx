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
        <View style={styles.slider}>
          <Image
            source={require('../../assets/ava.jpg')}
            style={styles.sliderImg}
          />
        </View>
        <View style={styles.slider}>
          <Image
            source={require('../../assets/ava.jpg')}
            style={styles.sliderImg}
          />
        </View>
        <View style={styles.slider}>
          <Image
            source={require('../../assets/ava.jpg')}
            style={styles.sliderImg}
          />
        </View>
      </Swiper>
      <WingBlank size="sm">
        <Card>
          <Flex style={styles.user}>
            <View>
              <Flex>
                <Image
                  source={require('../../assets/ava.jpg')}
                  style={styles.ava}
                />
                <Text style={{marginLeft: '5%', fontSize: 16}}>龙泽球</Text>
              </Flex>
            </View>
            <Text>1000.0万粉丝</Text>
            <Text style={{marginLeft: 15}}>大V淘主</Text>
          </Flex>
        </Card>
        <WhiteSpace />
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
          <Card.Header title="快来评论吧" extra="500❤" />
          <Card.Body>
            <Flex style={{marginLeft: 15}}>
              <Text>龙傲天:</Text>
              <Text>龙泽球666牛逼啊</Text>
            </Flex>
            <Flex style={{marginLeft: 15}}>
              <Text>龙泽球:</Text>
              <Text>是在下菜了 学到了</Text>
            </Flex>
          </Card.Body>
          <Card.Footer extra="查看更多" />
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
  slider: {
    flex: 1,
  },
  sliderImg: {
    width: undefined,
    resizeMode: 'cover',
  },
  ava: {
    width: scaleSizeW(70),
    aspectRatio: 1,
    height: undefined,
    borderRadius: scaleSizeW(35),
  },
  user: {
    padding: 5,
    justifyContent: 'flex-start',
  },
});
export default DynamicDetail;

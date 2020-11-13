import Swiper from 'react-native-swiper';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from '@ant-design/react-native/lib/card';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import List from '@ant-design/react-native/lib/list';
import Item from '@ant-design/react-native/lib/list/ListItem';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import WhiteSpace from '@ant-design/react-native/lib/white-space';
import {scaleSizeW} from '../../utils/screen';

const CommodityDetail = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={4}>
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
      </Swiper>
      <WingBlank size="sm">
        <Card>
          <Flex style={{marginLeft: 10}}>
            <Text style={{fontSize: 20}}>&yen;</Text>
            <Text style={{fontSize: 40}}>118</Text>
          </Flex>
          <Text style={{marginLeft: 10}}>韩国东大门 北京天安门潮牌</Text>
        </Card>
        <WhiteSpace />
        <List>
          <Item thumb={<Text>选择</Text>} arrow="horizontal">
            <View style={styles.listtext}>
              <Text>颜色/尺码</Text>
            </View>
          </Item>
          <Item thumb={<Text>发货</Text>} arrow="horizontal">
            <View style={styles.listtext}>
              <Text>浙江杭州</Text>
            </View>
          </Item>
          <Item thumb={<Text>保障</Text>} arrow="horizontal">
            <View style={styles.listtext}>
              <Text>7天无理由</Text>
            </View>
          </Item>
          <Item thumb={<Text>参数</Text>} arrow="horizontal">
            <View style={styles.listtext}>
              <Text>品牌 功能...</Text>
            </View>
          </Item>
        </List>
        <WhiteSpace />
        <Card>
          <Card.Header title="宝贝评价(6)" extra="查看全部" />
          <Card.Body style={{marginLeft: 15}}>
            <Flex>
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.avatar}
              />
              <Text style={{marginLeft: 5}}>龙泽球</Text>
            </Flex>
            <Text style={{marginTop: 5}}>666</Text>
          </Card.Body>
        </Card>
      </WingBlank>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: 350,
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
  slider: {
    flex: 1,
  },
  sliderImg: {
    width: undefined,
    resizeMode: 'cover',
  },
});
export default CommodityDetail;

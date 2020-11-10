import Swiper from 'react-native-swiper';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from '@ant-design/react-native/lib/card';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import List from '@ant-design/react-native/lib/list';
import Item from '@ant-design/react-native/lib/list/ListItem';

const CommodityDetail = () => {
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
        <Card>
          <Text>&yen;118</Text>
          <Text>韩国东大门 北京天安门潮牌</Text>
        </Card>
        <Card>
          <List>
            <Item thumb={<Text>选择</Text>} arrow="horizontal">
              <View style={styles.listtext}>
                <Text>颜色/尺码</Text>
              </View>
            </Item>
            <Item thumb={<Text>发货</Text>} arrow="horizontal">
              <View style={styles.listtext}>
                <Text>颜色/尺码</Text>
              </View>
            </Item>
            <Item thumb={<Text>保障</Text>} arrow="horizontal">
              <View style={styles.listtext}>
                <Text>颜色/尺码</Text>
              </View>
            </Item>
            <Item thumb={<Text>活动</Text>} arrow="horizontal">
              <View style={styles.listtext}>
                <Text>颜色/尺码</Text>
              </View>
            </Item>
            <Item thumb={<Text>参数</Text>} arrow="horizontal">
              <View style={styles.listtext}>
                <Text>颜色/尺码</Text>
              </View>
            </Item>
          </List>
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
});
export default CommodityDetail;

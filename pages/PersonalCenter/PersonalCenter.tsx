import Card from '@ant-design/react-native/lib/card';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import List from '@ant-design/react-native/lib/list';
import Item from '@ant-design/react-native/lib/list/ListItem';
import {Tabs} from '@ant-design/react-native/lib/tabs/Tabs';
import WhiteSpace from '@ant-design/react-native/lib/white-space';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import React, {useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';
import {scaleSizeW} from '../../utils/screen';

interface PersonalCenterProps {
  dispatch: any;
  navigation: any;
  user: any;
}

const PersonalCenter = (props: PersonalCenterProps) => {
  const logistics = [];
  for (let i = 0; i < 10; i++) {
    logistics.push(
      <TouchableOpacity
        key={i}
        style={styles.logisticsbox}
        onPress={() => props.navigation.navigate('商品')}>
        <Flex justify="between">
          <Image source={require('../../assets/pic2.jpg')} style={styles.pic} />
          <View>
            <Text style={{marginBottom: 20}}>iphone12</Text>
            <Text style={{marginBottom: 20}}>黑色;L</Text>
            <Text>&yen;118</Text>
          </View>
          <View>
            <Text>&times;1</Text>
          </View>
        </Flex>
      </TouchableOpacity>,
    );
  }
  useEffect(() => {
    props.dispatch({
      type: 'user/getUserName',
    });
  }, []);
  const tabs = [
    {title: '待付款'},
    {title: '待发货'},
    {title: '待收货'},
    {title: '已完成'},
  ];
  return (
    <ScrollView style={{flex: 1}}>
      <WingBlank size="sm">
        <WhiteSpace />
        <Card style={{height: 150, justifyContent: 'center'}}>
          <Flex justify="between">
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.avatar}
              />
              <Text>{props.user.name}</Text>
            </View>
            <View>
              <Text style={{fontSize: 20, marginRight: 20}}>设置</Text>
            </View>
          </Flex>
        </Card>
        <WhiteSpace />
        <Card style={{height: 170}}>
          <View style={styles.logistics}>
            <Tabs tabs={tabs}>
              <Swiper
                showsButtons={true}
                autoplay={true}
                showsPagination={false}
                autoplayTimeout={4}>
                {logistics}
              </Swiper>
            </Tabs>
          </View>
        </Card>
        <WhiteSpace />
        <List>
          <Item
            thumb={
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.icon}
              />
            }
            arrow="horizontal"
            onPress={() => props.navigation.navigate('全部订单')}>
            <View>
              <Text style={styles.iconText}>全部订单</Text>
            </View>
          </Item>
          <Item
            thumb={
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.icon}
              />
            }
            arrow="horizontal"
            onPress={() => props.navigation.navigate('地址管理')}>
            <View>
              <Text style={styles.iconText}>地址管理</Text>
            </View>
          </Item>
          <Item
            thumb={
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.icon}
              />
            }
            arrow="horizontal"
            onPress={() => props.navigation.navigate('实名认证')}>
            <View>
              <Text style={styles.iconText}>实名认证</Text>
            </View>
          </Item>
          <Item
            thumb={
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.icon}
              />
            }
            arrow="horizontal"
            onPress={() => props.navigation.navigate('我的收藏')}>
            <View>
              <Text style={styles.iconText}>我的收藏</Text>
            </View>
          </Item>
          <Item
            thumb={
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.icon}
              />
            }
            arrow="horizontal"
            onPress={() => props.navigation.navigate('支付方式')}>
            <View>
              <Text style={styles.iconText}>支付方式</Text>
            </View>
          </Item>
          <Item
            thumb={
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.icon}
              />
            }
            arrow="horizontal"
            onPress={() => props.navigation.navigate('联系客服')}>
            <View>
              <Text style={styles.iconText}>联系客服</Text>
            </View>
          </Item>
        </List>
      </WingBlank>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logistics: {
    flex: 1,
    margin: 5,
    overflow: 'hidden',
  },
  avatar: {
    width: scaleSizeW(150),
    aspectRatio: 1,
    height: undefined,
    marginLeft: '2%',
    borderRadius: scaleSizeW(75),
  },
  icon: {
    width: scaleSizeW(50),
    aspectRatio: 1,
    height: undefined,
    borderRadius: scaleSizeW(25),
  },
  iconText: {marginLeft: 10, fontSize: 15},
  pic: {
    width: '20%',
    height: 100,
    resizeMode: 'cover',
    marginLeft: '2%',
    marginTop: '2%',
  },
  logisticsbox: {
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default connect((state: any) => ({
  user: state.user,
}))(PersonalCenter);

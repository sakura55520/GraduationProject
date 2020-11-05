import Card from '@ant-design/react-native/lib/card';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import List from '@ant-design/react-native/lib/list';
import Item from '@ant-design/react-native/lib/list/ListItem';
import {Tabs} from '@ant-design/react-native/lib/tabs/Tabs';
import WhiteSpace from '@ant-design/react-native/lib/white-space';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import React, {useEffect} from 'react';
import {View, Image, ScrollView, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {scaleSizeW} from '../../utils/screen';

interface PersonalCenterProps {
  dispatch: any;
  navigation: any;
  user: any;
}

const PersonalCenter = (props: PersonalCenterProps) => {
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
      <WingBlank>
        <WhiteSpace />
        <Card>
          <Card.Body>
            <Flex>
              <View style={{height: 100}}>
                <Image
                  source={require('../../assets/ava.jpg')}
                  style={styles.avatar}
                />
                <Text>{props.user.name}</Text>
              </View>
              <View style={{marginLeft:'50%'}}>
                <Text style={{fontSize: 20}}>设置</Text>
              </View>
            </Flex>
          </Card.Body>
          <Card.Footer extra="" />
        </Card>
        <WhiteSpace />
        <Card style={{height: 150}}>
          <View style={styles.logistics}>
            <Tabs tabs={tabs}>
              <View style={styles.tab}>
                <Text>待付款</Text>
              </View>
              <View style={styles.tab}>
                <Text>待发货</Text>
              </View>
              <View style={styles.tab}>
                <Text>待收货</Text>
              </View>
              <View style={styles.tab}>
                <Text>已完成</Text>
              </View>
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
            arrow="horizontal">
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
            arrow="horizontal">
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
            arrow="horizontal">
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
            arrow="horizontal">
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
            arrow="horizontal">
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
            arrow="horizontal">
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
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: '#fff',
  },
  logistics: {
    flex: 1,
    margin: 5,
    overflow:'hidden'
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
});

export default connect((state: any) => ({
  user: state.user,
}))(PersonalCenter);

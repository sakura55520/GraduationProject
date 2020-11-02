import Card from '@ant-design/react-native/lib/card';
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
  loading: boolean;
}

const PersonalCenter = (props: PersonalCenterProps) => {
  useEffect(() => {
    props.dispatch({
      type: 'user/setName',
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
            <View style={{height: 100}}>
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.avatar}
              />
            </View>
          </Card.Body>
          <Card.Footer content="未登录" extra="" />
        </Card>
        <WhiteSpace />
        <List>
          <Item
            thumb={
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.icon}
              />
            }>
            <View>
              <Text style={styles.iconText}>余额</Text>
            </View>
          </Item>
          <Item
            thumb={
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.icon}
              />
            }>
            <View>
              <Text style={styles.iconText}>收藏</Text>
            </View>
          </Item>
          <Item
            thumb={
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.icon}
              />
            }>
            <View>
              <Text style={styles.iconText}>充值</Text>
            </View>
          </Item>
        </List>
        <WhiteSpace />
        <Card style={{height: 500}}>
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
  iconText: {marginLeft: 10, fontSize: 20},
});

export default connect((state: any) => ({
  user: state.user,
  loading: state.loading,
}))(PersonalCenter);

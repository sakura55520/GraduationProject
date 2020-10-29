import Card from '@ant-design/react-native/lib/card';
import List from '@ant-design/react-native/lib/list';
import Item from '@ant-design/react-native/lib/list/ListItem';
import {Tabs} from '@ant-design/react-native/lib/tabs/Tabs';
import WhiteSpace from '@ant-design/react-native/lib/white-space';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import React, {useEffect} from 'react';
import {View, Image, ScrollView, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

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
            <View style={{height: 42}}>
              <Image
                source={{
                  uri:
                    'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                }}
                style={{width: 29, height: 29}}
              />
            </View>
          </Card.Body>
          <Card.Footer content="iphone11热卖" extra="" />
        </Card>
        <WhiteSpace />
        <List>
          <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
            {props.loading}
          </Item>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal">
            thumb
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
});

export default connect((state: any) => ({
  user: state.user,
  loading: state.loading,
}))(PersonalCenter);

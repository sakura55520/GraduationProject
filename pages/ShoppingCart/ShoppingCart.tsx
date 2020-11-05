import Card from '@ant-design/react-native/lib/card';
import List from '@ant-design/react-native/lib/list';
import Item from '@ant-design/react-native/lib/list/ListItem';
import SearchBar from '@ant-design/react-native/lib/search-bar';
import React from 'react';
import {ScrollView, Image, View, Text, StyleSheet} from 'react-native';
import {scaleSizeW} from '../../utils/screen';

const ShoppingCart = ({navigation}: {navigation: any}) => {
  const chatboxs = [];
  for (let i = 0; i < 10; i++) {
    chatboxs.push(
      <Item key={i}>
        <Image
          source={require('../../assets/ava.jpg')}
          style={styles.friendAvatar}
        />
      </Item>,
    );
  }
  return (
    <>
      <SearchBar defaultValue="" placeholder="搜索" />
      <ScrollView style={{flex: 1}}>
        <Card style={styles.usercard}>
          <Card.Body>
            <Image
              source={require('../../assets/ava.jpg')}
              style={styles.friendAvatar}
            />
            <Text>未登录</Text>
          </Card.Body>
        </Card>
        <List>{chatboxs}</List>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  usercard: {
    marginTop: 10,
    height: 120,
    marginBottom: 10,
  },
  friendAvatar: {
    width: scaleSizeW(100),
    aspectRatio: 1,
    height: undefined,
    marginLeft: '2%',
    borderRadius: scaleSizeW(50),
  },
});
export default ShoppingCart;

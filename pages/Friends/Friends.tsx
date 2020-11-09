import Card from '@ant-design/react-native/lib/card';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import List from '@ant-design/react-native/lib/list';
import Item from '@ant-design/react-native/lib/list/ListItem';
import SearchBar from '@ant-design/react-native/lib/search-bar';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, Image, View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scaleSizeW} from '../../utils/screen';
import ChatBox from '../ChatBox/ChatBox';

const Stack = createStackNavigator();

const Friends = ({navigation}: {navigation: any}) => {
  const chatboxs = [];
  for (let i = 0; i < 10; i++) {
    chatboxs.push(
      <TouchableOpacity onPress={() => navigation.navigate('聊天框')} key={i}>
        <Item>
          <Flex justify="between">
            <Flex>
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.friendAvatar}
              />
              <View style={{marginLeft: 5}}>
                <Text>老铁</Text>
                <Text>在吗铁汁</Text>
              </View>
            </Flex>
            <View>
              <Text>20/11/9</Text>
              <Text></Text>
            </View>
          </Flex>
        </Item>
      </TouchableOpacity>,
    );
  }
  return (
    <>
      <SearchBar defaultValue="" placeholder="搜索" />
      <ScrollView style={{flex: 1}}>
        <Card style={styles.usercard}>
          <Flex justify="between">
            <View style={{marginLeft: 10, alignItems: 'center'}}>
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.friendAvatar}
              />
              <Text style={{marginTop: 3}}>未登录</Text>
            </View>
            <View style={{marginRight: 10}}>
              <Text style={{marginBottom: 10}}>设置</Text>
              <Text style={{marginBottom: 10}}>添加好友</Text>
              <Text>我的好友</Text>
            </View>
          </Flex>
        </Card>
        <List>{chatboxs}</List>
      </ScrollView>
    </>
  );
};

const FriendsPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="好友" component={Friends} />
      <Stack.Screen name="聊天框" component={ChatBox} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  usercard: {
    marginTop: 5,
    height: 120,
    marginBottom: 5,
    justifyContent: 'center',
  },
  friendAvatar: {
    width: scaleSizeW(100),
    aspectRatio: 1,
    height: undefined,
    borderRadius: scaleSizeW(50),
  },
});
export default FriendsPage;

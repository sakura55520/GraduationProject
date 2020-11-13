import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Card from '@ant-design/react-native/lib/card';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import Flex from '@ant-design/react-native/lib/flex/Flex';

const ChatBox = () => {
  const [value, onChangeText] = React.useState('请输入');
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          height: 40,
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        <Text style={{fontSize: 18}}>龙少</Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <WingBlank>
          <View style={{marginTop: 10}}>
            <View style={{alignItems: 'center'}}>
              <Text>2020/11/11 15:40</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/ava.jpg')}
                style={styles.avatar}
              />
              <View style={{marginLeft: 10}}>
                <Text>龙少</Text>
                <Card style={{marginTop: 5, maxWidth: '80%'}}>
                  <Text style={{padding: 5}}>
                    1111111111111111111111111111111111111111111111111111111111111111111111111
                  </Text>
                </Card>
              </View>
            </View>
          </View>
        </WingBlank>
      </ScrollView>
      <Flex style={{height: 60, justifyContent: 'center', width: '100%'}}>
        <Flex
          style={{
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              width: '95%',
              height: 40,
              backgroundColor: '#fff',
            }}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </Flex>
      </Flex>
    </>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: '10%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 1000,
  },
});
export default ChatBox;

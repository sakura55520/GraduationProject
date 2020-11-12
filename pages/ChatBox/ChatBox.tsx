import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import Card from '@ant-design/react-native/lib/card';
import WingBlank from '@ant-design/react-native/lib/wing-blank';

const ChatBox = () => {
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

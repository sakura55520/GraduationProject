import List from '@ant-design/react-native/lib/list';
import Item from '@ant-design/react-native/lib/list/ListItem';
import React from 'react';
import {ScrollView, Image} from 'react-native';

const Friends = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <List renderHeader={'带缩略图'}>
        <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
          thumb
        </Item>
        <Item
          thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          arrow="horizontal">
          thumb
        </Item>
        <Item
          extra={
            <Image
              source={{
                uri:
                  'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
              }}
              style={{width: 29, height: 29}}
            />
          }
          arrow="horizontal">
          extra为Image
        </Item>
      </List>
    </ScrollView>
  );
};

export default Friends;

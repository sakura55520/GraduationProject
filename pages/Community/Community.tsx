import React from 'react';
import {ScrollView} from 'react-native';
import SearchBar from '@ant-design/react-native/lib/search-bar';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import Flex from '@ant-design/react-native/lib/flex/Flex';
import DynamicDetail from '../DynamicDetail';
import {createStackNavigator} from '@react-navigation/stack';
import Dynamic from '../../components/Dynamic';

const Stack = createStackNavigator();
const Community = ({navigation}: {navigation: any}) => {
  const Dynamics = [];
  for (let i = 0; i < 10; i++) {
    Dynamics.push(<Dynamic navigation={navigation} key={i} />);
  }
  return (
    <>
      <SearchBar defaultValue="" placeholder="搜索" />
      <ScrollView style={{flex: 1}}>
        <WingBlank size="sm">
          <Flex wrap="wrap" justify="around">
            {Dynamics}
          </Flex>
        </WingBlank>
      </ScrollView>
    </>
  );
};
const CommunityPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="社区" component={Community} />
      <Stack.Screen name="动态" component={DynamicDetail} />
    </Stack.Navigator>
  );
};
export default CommunityPage;

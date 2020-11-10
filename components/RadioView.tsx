import Flex from '@ant-design/react-native/lib/flex/Flex';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

const RadioView = () => {
  const [check, setcheck] = useState(false);
  let color = '#fff';
  const touch = () => {
    setcheck(!check);
  };

  return (
    <TouchableOpacity onPress={touch}>
      <Flex
        style={{
          backgroundColor: color,
          width: 20,
          height: 20,
          borderRadius: 50,
          borderColor: '#d9d9d9',
          borderWidth: 1,
          justifyContent: 'center',
        }}>
        {check ? (
          <View
            style={{
              backgroundColor: '#00bfff',
              width: 15,
              height: 15,
              borderRadius: 50,
            }}></View>
        ) : null}
      </Flex>
    </TouchableOpacity>
  );
};
export default RadioView;

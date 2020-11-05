import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const GuidePage = () => {
  return (
    <View style={styles.guide}>
      <Image source={require('../../assets/pic2.jpg')} style={styles.img} />
    </View>
  );
};
const styles = StyleSheet.create({
  guide: {
    position: 'absolute',
    zIndex: 99999,
    width: '100%',
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
export default GuidePage;

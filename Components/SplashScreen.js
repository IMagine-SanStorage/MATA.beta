import React from 'react';
import {Image, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Logo from '../assets/icon.png';

export default function SplashScreen(){


  const edges = useSafeAreaInsets

  return(
      <View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#315EFF',
      }}>

<Animated.View>
  <Image source={Logo}></Image>
</Animated.View>
      </View>
  );
}
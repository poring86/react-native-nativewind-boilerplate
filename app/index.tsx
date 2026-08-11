import React from 'react';
import { Text, ViewStyle, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { tw } from '../lib/tw';

export default function Index() {
  return (
    <SafeAreaView style={tw('flex-1 items-center justify-center bg-purple-200 p-6') as ViewStyle}>
      <View style={tw('flex-row items-center gap-4') as ViewStyle}>
        <Image
          source={{ uri: 'https://via.placeholder.com/96x96.png?text=NW' }}
          style={tw('w-24 h-24 rounded-full') as ViewStyle}
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/96x96.png?text=RN' }}
          style={tw('w-24 h-24 rounded-full') as ViewStyle}
        />
      </View>

      <Text style={tw('text-3xl font-extrabold text-white mt-2')}>Welcome</Text>
      <Text style={tw('mt-2 text-center text-sm text-white')}>
        Ready to start — edit the files in {"app/"} to customize this boilerplate.
      </Text>

    </SafeAreaView>
  );
}

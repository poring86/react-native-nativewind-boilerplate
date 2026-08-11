import React from 'react';
import { Text, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { tw } from '../lib/tw';

export default function Index() {
  return (
    <SafeAreaView style={tw('flex-1 items-center justify-center bg-purple-200 p-6') as ViewStyle}>
      <View style={tw('flex-row items-center') as ViewStyle}>
        <View style={tw('w-24 h-24 rounded-full items-center justify-center mr-4 bg-green-500') as ViewStyle}>
          <Text style={tw('text-xl font-extrabold text-white')}>NW</Text>
        </View>
        <View style={tw('w-24 h-24 rounded-full items-center justify-center ml-4 bg-green-500') as ViewStyle}>
          <Text style={tw('text-xl font-extrabold text-white')}>RN</Text>
        </View>
      </View>

      <Text style={tw('text-3xl font-extrabold text-white mt-2')}>Welcome</Text>
      <Text style={tw('mt-2 text-center text-sm text-white')}>
        Ready to start — edit the files in {"app/"} to customize this boilerplate.
      </Text>

    </SafeAreaView>
  );
}

import React from 'react';
import { Text, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { tw } from '../lib/tw';

export default function Index() {
  return (
    <SafeAreaView style={tw('flex-1 items-center justify-center bg-green-500 p-6') as ViewStyle}>
      <Text style={tw('text-3xl font-extrabold text-white')}>Welcome</Text>
      <Text style={tw('mt-2 text-center text-sm text-white')}>
        Ready to start — edit the files in {"app/"} to customize this boilerplate.
      </Text>

    </SafeAreaView>
  );
}

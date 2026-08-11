import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogoNativeWind from '../components/LogoNativeWind';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-purple-200 p-6">
      <View className="flex-row items-center gap-4">
        <LogoNativeWind width={96} height={96} />
      </View>

      <Text className="text-3xl font-extrabold text-white mt-2">Welcome</Text>
      <Text className="mt-2 text-center text-sm text-white">Ready to start — edit the files in {"app/"} to customize this boilerplate.</Text>

    </SafeAreaView>
  );
}

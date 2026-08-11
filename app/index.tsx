import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-purple-200 p-6">
      <View className="flex-row items-center gap-4">
        <Image
          source={{ uri: 'https://via.placeholder.com/96x96.png?text=NW' }}
          className="w-24 h-24 rounded-full"
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/96x96.png?text=RN' }}
          className="w-24 h-24 rounded-full"
        />
      </View>

      <Text className="text-3xl font-extrabold text-white mt-2">Welcome</Text>
      <Text className="mt-2 text-center text-sm text-white">
        Ready to start — edit the files in {"app/"} to customize this boilerplate.
      </Text>

    </SafeAreaView>
  );
}

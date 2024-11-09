import { Text, Image, View,  TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    ChevronDownIcon,
    UserIcon,
    SearchIcon,
    AdjustmentsVerticalIcon,
    AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";

// import "../global.css";
// import "nativewind";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
        {/* Header */}
        <View className="flex-row items-center space-x-2 pb-3 mx-4 px-4">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            style={{ width: 28, height: 28 }}
          />
          
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver now!!</Text>
            <Text className="font-bold text-xl">Current Location
                <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                {/* <SearchIcon  size={20} color="gray" /> */}
                <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
            </View>

            <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>
      {/* body */}
      <ScrollView>
        {/* categories */}

        {/* featured row */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

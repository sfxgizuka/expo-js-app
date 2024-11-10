import { Text, Image, View, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRows from "../components/FeaturedRows";

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
    <SafeAreaView>
      <View className="bg-white pt-5">
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
            <Text className="font-bold text-gray-400 text-xs">
              Deliver now!!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center rounded-lg">
            <MagnifyingGlassIcon size={20} color="gray" className="text-gray-400" />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
              className="flex-1"
              autoFocus={true}
            />
          </View>

          <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
        </View>
      </View>

      {/* body */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="mb-8" >
        {/* categories */}
        <Categories />

        {/* featured row */}
        <FeaturedRows title="Featured" description="Paid placements from our partners" id="123" />
        <FeaturedRows title="Tasty Discounts" description="Everyone's been enjoying these juicy discounts" id="1234" />
        <FeaturedRows title="Offers near you" description="Support your local restaurants" id="12345" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

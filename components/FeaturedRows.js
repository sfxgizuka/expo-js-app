import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRows = ({ id, description, title }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="mt-2 text-gray-500 text-xs px-4">{description}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }} className="pt-4">
        {/* Restaurant Cards */}
        <RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_description="Sushi at a great price"
            dishes={["Sashimi", "Tempura", "Nigiri"]}
            lat={37.78825}
            long={-122.4324}
        />
        <RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_description="Sushi at a great price"
            dishes={["Sashimi", "Tempura", "Nigiri"]}
            lat={37.78825}
            long={-122.4324}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;

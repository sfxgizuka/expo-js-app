import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}>
      {/* Category Card */}
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing 1" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing 2" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
    </ScrollView>
  )
}

export default Categories
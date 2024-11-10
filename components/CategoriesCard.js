import { Text, TouchableOpacity, View, Image } from 'react-native'
import React, { Component } from 'react'

export class CategoriesCard extends Component {
  render({ imgUrl, title } = this.props) {
    return (
      <TouchableOpacity className="relative mr-2">
        <Image src={imgUrl} className="h-20 w-20 rounded" />
        <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
      </TouchableOpacity>
    )
  }
}

export default CategoriesCard
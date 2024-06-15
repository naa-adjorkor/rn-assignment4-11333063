import { View, Text } from 'react-native'
import React from 'react'


export default function HomeScreen({route}) {
  const {name,email} = route.params;
  return (
    <View>
      <Text>Welcome {name}</Text>
      <Text>Welcome {email}</Text>
    </View>
  )
}

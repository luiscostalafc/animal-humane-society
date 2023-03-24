import { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screen/HomeScreen/HomeScreen'
import LikedDogsScreen from './src/screen/LikedDogsScreen/LikedDogsScreen'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    LikedDogs: LikedDogsScreen
  },
  {
    initialRouteName: 'Home'
  }
)

const Navigator = createAppContainer(AppNavigator)

export default function App(): ReactElement {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
    </SafeAreaView>
  )
}

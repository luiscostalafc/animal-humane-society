import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screen/HomeScreen/HomeScreen'
import LikedDogsScreen from '../screen/LikedDogsScreen/LikedDogsScreen'

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

export default Navigator

import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { HeaderBackButton } from 'react-navigation-stack'

import { Container, ImageContainer, ImageItem, RemoveIcon } from './styles'

const LikedDogsScreen = ({ navigation }: NavigationParams) => {
  const setLikedDogs = navigation.getParam('setLikedDogs', () => {})
  const likedDogs = navigation.getParam('likedDogs', [])

  const handleRemove = (index: number) => {
    const newLikedDogs = likedDogs.filter((_, i) => i !== index)
    setLikedDogs(newLikedDogs)
    navigation.goBack()
  }

  return (
    <Container>
      <FlatList
        data={likedDogs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ImageContainer>
            <ImageItem source={{ uri: item }} />
            {!!likedDogs?.length && (
              <RemoveIcon
                name="trash-can-outline"
                size={40}
                color="red"
                onPress={() => handleRemove(index)}
              />
            )}
          </ImageContainer>
        )}
      />
      {!likedDogs?.length && (
        <View
          style={{
            flex: 1,
            alignItems: 'center'
          }}
        >
          <Text>No liked dogs 😢</Text>
        </View>
      )}
    </Container>
  )
}

LikedDogsScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: () => <HeaderBackButton onPress={() => navigation.goBack()} />,
  headerTitle: 'Liked Dogs',
  headerTitleStyle: { alignSelf: 'center' }
})

export default LikedDogsScreen

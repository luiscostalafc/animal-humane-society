import { AntDesign, Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Animated, Dimensions, Image, TouchableOpacity } from 'react-native'
import { NavigationParams } from 'react-navigation'

import { DogCard } from '../../components/DogCard/DogCard'
import api from '../../services/api'

import {
  ArrowIcon,
  ButtonContainer,
  Container,
  HeartIcon,
  IconContainer,
  ImageContainer,
  TextButton
} from './styles'

const HomeScreen = ({ navigation }: NavigationParams) => {
  const [imageUrl, setImageUrl] = useState('')
  const [likedDogs, setLikedDogs] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  const loadRandomDogImage = async () => {
    setLoading(true)
    try {
      const response = await api('/')
      const data = await response.data
      setImageUrl(data.message)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadRandomDogImage()
  }, [likedDogs, isFavorite])

  const handleSwipeRight = async () => {
    if (!likedDogs.includes(imageUrl) && !loading) {
      setLikedDogs([...likedDogs, imageUrl])
      setIsFavorite(true)
    }
  }

  const handleSwipeLeft = async () => {
    setIsFavorite(false)
    loadRandomDogImage()
  }

  return (
    <Container>
      <DogCard
        loading={loading}
        imageUrl={imageUrl}
        onSwipeRight={handleSwipeRight}
        onSwipeLeft={handleSwipeLeft}
      >
        <IconContainer testID="icon-container">
          <TouchableOpacity testID="swipe-right-button" onPress={() => handleSwipeRight()}>
            <HeartIcon name="heart" size={32} color="red" />
          </TouchableOpacity>
          <TouchableOpacity testID="swipe-left-button" onPress={() => handleSwipeLeft()}>
            <ArrowIcon name="ios-arrow-forward" size={32} color="black" />
          </TouchableOpacity>
        </IconContainer>

        <ImageContainer windowWidth={windowWidth} windowHeight={windowHeight}>
          <Image
            testID="dog-card-image"
            source={{ uri: imageUrl }}
            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          />
        </ImageContainer>

        {loading && (
          <Animated.View
            style={[
              {
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              }
            ]}
          >
            {isFavorite ? (
              <Ionicons name="ios-heart" size={52} color="red" />
            ) : (
              <ActivityIndicator size="large" color="grey" />
            )}
          </Animated.View>
        )}
      </DogCard>
      <ButtonContainer>
        <TouchableOpacity
          testID="see-liked-dogs-button"
          style={{ alignItems: 'center', marginBottom: 20 }}
          onPress={() =>
            navigation.navigate('LikedDogs', { likedDogs, setLikedDogs, loadRandomDogImage })
          }
        >
          <AntDesign name="heart" size={32} color="red" />

          <TextButton>See Liked Dogs</TextButton>
        </TouchableOpacity>
      </ButtonContainer>
    </Container>
  )
}

export default HomeScreen

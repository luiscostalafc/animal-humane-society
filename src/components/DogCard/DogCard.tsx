import React from 'react'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'

import { DogCardProps } from 'src/types/DogCard'

import { Container, StyledImage } from './styles'

export const DogCard = ({
  imageUrl,
  onSwipeRight,
  onSwipeLeft,
  children,
  loading
}: DogCardProps) => {
  const onSwipe = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.translationX > 100) {
      onSwipeLeft()
    } else if (event.nativeEvent.translationX < -100) {
      onSwipeRight()
    }
  }

  return (
    <PanGestureHandler onGestureEvent={onSwipe}>
      <Container testID="dog-card-container" loading={loading}>
        {children}
        <StyledImage testID="dog-card-image" source={{ uri: imageUrl }} />
      </Container>
    </PanGestureHandler>
  )
}

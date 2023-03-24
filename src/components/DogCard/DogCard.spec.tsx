import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'

import { DogCardProps } from '../../types/DogCard'

import { DogCard } from './DogCard'

const imageUrl = 'https://images.dog.ceo/breeds/hound-afghan/n02088094_4472.jpg'

const onSwipeRight = jest.fn()
const onSwipeLeft = jest.fn()

const props: DogCardProps = {
  imageUrl,
  onSwipeRight,
  onSwipeLeft
}

describe('DogCard', () => {
  it('should render the image', () => {
    const { getByTestId } = render(<DogCard {...props} />)
    const image = getByTestId('dog-card-image')
    expect(image.props.source.uri).toBe(imageUrl)
  })

  it('should call onSwipeRight when swiping right', () => {
    const { getByTestId } = render(<DogCard {...props} />)
    const swipeable = getByTestId('dog-card-container')
    fireEvent(swipeable, 'onGestureEvent', {
      nativeEvent: { translationX: -200 }
    } as PanGestureHandlerGestureEvent)
    expect(onSwipeRight).toHaveBeenCalled()
  })

  it('should call onSwipeLeft when swiping left', () => {
    const { getByTestId } = render(<DogCard {...props} />)
    const swipeable = getByTestId('dog-card-container')
    fireEvent(swipeable, 'onGestureEvent', {
      nativeEvent: { translationX: 200 }
    } as PanGestureHandlerGestureEvent)
    expect(onSwipeLeft).toHaveBeenCalled()
  })

  it('should have a data-testid attribute for the image', () => {
    const { getByTestId } = render(<DogCard {...props} />)
    const image = getByTestId('dog-card-image')
    expect(image).toBeTruthy()
  })

  it('should have a data-testid attribute for the swipeable container', () => {
    const { getByTestId } = render(<DogCard {...props} />)
    const swipeable = getByTestId('dog-card-container')
    expect(swipeable).toBeTruthy()
  })
})

import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextButton = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: #000;
  font-weight: bold;
`

export const IconContainer = styled.View`
  position: absolute;
  bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`

export const HeartIcon = styled(Ionicons)`
  margin-right: 20px;
`

export const ArrowIcon = styled(Ionicons)`
  transform: rotate(-180deg);
  margin-left: 20px;
`

export const ImageContainer = styled.View<{
  windowWidth: number
  windowHeight: number
}>`
  height: windowWidth;
  width: 100%;
  justify-content: center;
  align-items: center;
`

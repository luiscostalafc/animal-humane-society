import { FontAwesome5 } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const ImageContainer = styled.View`
  position: relative;
`

export const ImageItem = styled.Image`
  width: 350px;
  height: 400px;
  margin-bottom: 10px;
`

export const RemoveIcon = styled(FontAwesome5).attrs({
  name: 'trash',
  size: 24,
  color: 'red'
})`
  position: absolute;
  top: 8px;
  right: 8px;
`

import styled from 'styled-components/native'

export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  resize: cover;
`

export const Container = styled.View<{
  loading: boolean
}>`
  background-color: ${({ loading }) => (loading ? 'RGBA(0, 0, 0, 0.40)' : '#EDF2F7')};
  opacity: ${({ loading }) => (loading ? 0.4 : 1)};
  position: absolute;
  width: 100%;
  height: 100%;
`

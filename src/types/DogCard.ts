export type DogCardProps = {
  imageUrl: string
  onSwipeRight: () => void
  onSwipeLeft: () => void
  children?: React.ReactNode
  loading?: boolean
}

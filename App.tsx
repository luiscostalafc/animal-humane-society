import { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Navigator from './src/navigation/Navigator'

export default function App(): ReactElement {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
    </SafeAreaView>
  )
}

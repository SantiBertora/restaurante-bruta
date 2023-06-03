import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <NavBar/>

      </div>
    </ChakraProvider>
  )
}

export default App
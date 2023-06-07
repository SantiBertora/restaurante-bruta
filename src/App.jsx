import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GaleriaES from './components/GaleriaES'
import BebidasES from './components/BebidasES'
import MenuES from './components/MenuES'
import VinosES from './components/VinosES'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <div>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={ <GaleriaES/> } />
            <Route exact path="/bebidas" element={ <BebidasES/> } />
            <Route exact path="/menu" element={ <MenuES/> } />
            <Route exact path="/vinos" element={ <VinosES/> } />
          </Routes>

        </div>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
import React from 'react'
import { Button, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

        <div className="logo">
        <Link to="/"><img src="/public/logo.png" alt="logo"/></Link>
        </div>

        <div>
          <Stack className='menu' direction='row' spacing={4} align='center'>
            <Link to="/bebidas"><Button variant='outline'>Bebidas</Button></Link>
            <Link to="/menu"><Button variant='outline'>Menú</Button></Link>
            <Link to="/vinos"><Button variant='outline'>Vinos</Button></Link>
          </Stack>
        </div>

    </div>
  )
}

export default NavBar
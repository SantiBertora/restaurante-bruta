import React from 'react'
import { Button, Stack } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>

        <div className="logo">
            <img src="/public/logo.png" alt="logo"/>
        </div>

        <div className="menu">
        <Stack direction='row' spacing={4} align='center'>

  <Button variant='outline'>
    Bebidas
  </Button>
  <Button variant='outline'>
    Menú
  </Button>
  <Button variant='outline'>
    Vinos
  </Button>

</Stack>
        </div>

    </div>
  )
}

export default NavBar
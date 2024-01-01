import { useState } from 'react'
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
import { Center, Square, Circle } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react";



function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  if (user)
    console.log(user.name);
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <div className='container'>
        <h2 style={{ color: "white" }}>No. of Copies : {count}
        </h2>
        <Stack direction='row' spacing={4}>
          <Button l colorScheme='teal' variant='solid' onClick={()=>setCount(count+1)}>
            +
          </Button>
          <Button colorScheme='teal' variant='outline' onClick={()=>setCount(count-1)}>
            -
          </Button>
        </Stack>
        {isAuthenticated &&
          <center>
            <div style={{ marginTop: "40px" }}>
              <img src={user.picture} alt={user.name} />
              <h2 style={{ color: "white" }}>{user.name}</h2>
              <p style={{ color: "white" }}>{user.email}</p>
            </div>
          </center>
        }
        {isAuthenticated ? (
          <center>
            <Button colorScheme='teal' variant='solid' onClick={() => logout()}>
              Logout
            </Button>
          </center>
        ) :
          <center>
            <Button leftIcon={<FcGoogle />} style={{marginTop:"20px"}} colorScheme='teal' variant='solid' onClick={() => loginWithRedirect()}>
              Login
            </Button>
          </center>
        }

      </div>
    </div>
  )
}

export default App

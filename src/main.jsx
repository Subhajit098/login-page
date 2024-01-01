import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>
  <Auth0Provider domain="dev-ibgc351k43m02nqt.us.auth0.com"
    clientId="VUHTU0gYWBjwNU8e7f9VARnZlDwbdUEO"
authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App/>
  </Auth0Provider>
  </ChakraProvider>
  </React.StrictMode>
)

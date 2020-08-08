import React from 'react';

import SignIn from './pages/SignIn'
import Register from './pages/Register'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <Register />
      <GlobalStyle />
    </>
  )
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { AuthContext } from '../contexts/AuthContext.js';
import { RefreshContext } from '../contexts/RefreshContext.js'
import GlobalStyles from '../styles/globalStyles.js';

import SignIn from '../components/User/SignIn.js'
import SignUp from '../components/User/SignUp.js';
import Wallet from '../components/Wallet/Wallet.js';

export default function App() {

  const [usertoken, setUsertoken] = useState({token: ''});
  const [refresh, setRefresh] = useState(false);

  return (
    <AuthContext.Provider value={{ usertoken, setUsertoken }}>
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      <GlobalStyles/>
      <BrowserRouter>

      
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/wallet' element={<Wallet/>} />
        </Routes>
      
      
      </BrowserRouter>
    </RefreshContext.Provider>
    </AuthContext.Provider>
  );
}
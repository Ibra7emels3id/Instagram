import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Story from './components/home_components/Story'
import Chats from './components/home_components/Chats'
import Followers from './components/home_components/Followers'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AllBost from './components/home_components/AllBost'

function App() {

    return (
        <>  
            <ToastContainer />
            <Header />
            <Story />
            <Chats />
            <Followers />
            <AllBost />
        </>
    )
}

export default App

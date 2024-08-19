import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Story from './components/home_components/Story'
import Chats from './components/home_components/Chats'
import Followers from './components/home_components/Followers'
import Bosts from './components/home_components/Bosts'

function App() {

    return (
        <>
            <Header />
            <Story />
            <Chats />
            <Followers />
            <Bosts />
        </>
    )
}

export default App

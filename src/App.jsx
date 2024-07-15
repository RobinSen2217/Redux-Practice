import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import Cake from './components/Cake'
import IceCream from './components/IceCream'
import User from './components/User'

function App() {


  return (
    <>
    {/* <Navbar/> */}
    {/* <Shop/> */}
    <div className='flex flex-col gap-y-7 w-full items-center h-[60vh] justify-center text-center'>
    <Cake/>
    <IceCream/>
    <User/>
    </div>
    </>
  )
}

export default App

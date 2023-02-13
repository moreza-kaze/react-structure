import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from '../components/Button'
import Test from '../feature/home/TestHome'

function App() {
  return (
    <>
      <div className="flex bg-black justify-center text-3xl font-bold underline ">
      <h1 className='text-red-500'>hello world</h1>
      <Button className='text-white'>eweer</Button>
      </div>
      <div>
        <Test />
      </div>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from '../components/Button'
import Test from '../feature/home/TestHome'
import { api } from '../utils'

function App() {
  useEffect(()=>{
    api.post("https://jsonplaceholder.typicode.com/posts/",{
      "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    })
  },[])
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

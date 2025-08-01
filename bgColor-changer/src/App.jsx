import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor]  = useState('olive')

  return (
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-black px-4 py-2 rounded-3xl'>
            <button onClick={()=>{setColor('red')}}
            className='outline-none px-4 py-1 rounded-2xl font-bold text-white cursor-pointer'
            style={{backgroundColor: 'red'}}
            >Red</button>
            <button onClick={()=>{setColor('yellow')}}
            className='outline-none px-4 py-1 rounded-2xl font-bold text-white cursor-pointer'
            style={{backgroundColor: 'yellow'}}
            >Yellow</button>
            <button onClick={()=>{setColor('green')}}
            className='outline-none px-4 py-1 rounded-2xl font-bold text-white cursor-pointer'
            style={{backgroundColor: 'green'}}
            >Green</button>
            <button onClick={()=>{setColor('purple')}}
            className='outline-none px-4 py-1 rounded-2xl font-bold text-white cursor-pointer'
            style={{backgroundColor: 'purple'}}
            >Purple</button>
             <button onClick={()=>{setColor('Brown')}}
            className='outline-none px-4 py-1 rounded-2xl font-bold text-white cursor-pointer'
            style={{backgroundColor: 'Brown'}}
            >Brown</button>
             <button onClick={()=>{setColor('blue')}}
            className='outline-none px-4 py-1 rounded-2xl font-bold text-white cursor-pointer'
            style={{backgroundColor: 'blue'}}
            >blue</button>
             <button onClick={()=>{setColor('pink')}}
            className='outline-none px-4 py-1 rounded-2xl font-bold text-white cursor-pointer'
            style={{backgroundColor: 'pink'}}
            >pink</button>
             <button onClick={()=>{setColor('white')}}
            className='outline-none px-4 py-1 rounded-2xl font-bold text-white cursor-pointer'
            style={{backgroundColor: 'white'}}
            >white</button>
          </div>
        </div>
      </div>
  )
}

export default App

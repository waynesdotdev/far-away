import Form from './components/Form'
import Logo from './components/Logo'
import React from 'react'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 3, packed: false },
]

export default function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList initialItems={initialItems} />
      <Stats />
    </div>
  )
}

import Form from './components/Form'
import Logo from './components/Logo'

import React from 'react'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

export default function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

import { useState } from 'react'
import Form from './components/Form'
import Logo from './components/Logo'
import React from 'react'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

export default function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items =>
      items.map(item =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    )
  }

  function handleClearList() {
    setItems([])
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  )
}

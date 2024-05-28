import { Children, createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(0)

  useEffect(() => {
    const storedItems = localStorage.getItem('items')
    if(storedItems) {
      setItems(JSON.parse(storedItems))
    }
    const loadStorageMonth = localStorage.getItem('selectedMonth')
    if(loadStorageMonth) {
      setSelectedMonth(parseInt(loadStorageMonth))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  },[items])

  useEffect(() => {
    localStorage.setItem('selectedMonth', selectedMonth.toString())
  },[selectedMonth])

  const addItem = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }

  const deleteItem = (id) => {
    const nextItems = items.filter((item) => String(item.id) !== String(id))
    setItems(nextItems)
  }

  const updateItem = (updatedItem) => {
    const nextItems = items.map((item) => {
      return String(item.id) === String(updatedItem.id) ? updatedItem : item
    })
    setItems(nextItems)
  }

  return (
    <Context.Provider
      value={{items, addItem, deleteItem, updateItem, selectedMonth, setSelectedMonth}}
    >
      {children}
    </Context.Provider>
  )


}
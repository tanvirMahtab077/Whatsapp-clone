import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routes from '../src/routes/Routes'

function App() {

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App

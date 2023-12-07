//React Hooks allow us to manage any changes in a component. When we need to manage those changes, we need React hooks. To implement, we add useState to the React import below
import React, { useState } from 'react'
import './App.css'

export default function App() {
  //Below we will create a React Hook, which is a variable that is created as the component is mounted to the Virtual DOM. We set the state of showContent to equal 'Home' as its initial state. setShowContent() is a function that we can use to manage the state of showContent. We should never try to directly change the value of showContent, but instead we use setShowContent to manage the 'state' of the variable whenever we need to change its value.
  const [showContent, setShowContent] = useState('Home')

  return 
}
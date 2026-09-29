import { useState } from 'react'
import Counter from '../components/Counter'
import Toggle from '../components/Toggle'
import ColChange from '../components/change'

const App = () => {


  return(
    <div>
      <Counter/>
      <Toggle/>
      <ColChange/>
    </div>
  )
}

export default App

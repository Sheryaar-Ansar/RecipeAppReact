import React from 'react'
import RecipeApp from './components/RecipeApp'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import RecipeKarahi from './components/RecipeKarahi'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<RecipeApp/>} />
          <Route path='/recipe/:id' element={<RecipeKarahi/>} />
        </Routes>
      {/* <RecipeApp /> */}
    </>
  )
}

export default App

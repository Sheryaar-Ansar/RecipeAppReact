import React from 'react'
import RecipeApp from './components/RecipeApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeMain from './components/RecipeMain'
import RecipeKarahi from './components/RecipeKarahi'
import RecipeList from './components/RecipeList'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/recipe/:id' element={<RecipeKarahi/>} />
        </Routes>
      <RecipeApp />
    </>
  )
}

export default App

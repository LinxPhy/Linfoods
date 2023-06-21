import { useState } from 'react'
import Masonry from 'react-masonry-css'
import Images from './Images'
import './Masonry.css'
import './App.css'

function App() {

  const breakpointCols = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <div className="container">
      <Masonry 
        breakpointCols={breakpointCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div className="items">
          <Images />
        </div>
      </Masonry>

    </div>
  )
}



export default App

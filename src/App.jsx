import { useState } from 'react'
import Masonry from 'react-masonry-css'
import './Masonry.css'
import './App.css'
import Reference from './Reference'

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
        <div className="item">
          <Image />
        </div>
      </Masonry>
    </div>
  )
}

const Image = () => {

  return(
    <img src={Reference.butternut_squash_risotto.src} alt="fruit tart" />
  )
  

}

export default App

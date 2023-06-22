import Masonry from 'react-masonry-css'
import Reference from './Reference';
import './Masonry.css'
import './App.css'

function App() {

  const keys = Object.keys(Reference).map(key => Reference[key]);

  const imageElements = keys.map((image, key) => (
    <Image data={{ image_name: image.name, src: image.src }} key={key} />
  ));

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
        {imageElements}

      </Masonry>

    </div>
  )
}



const Image = (props) => {
  const { image_name, src } = props.data;

  return (
    <div className='item'>
      <img src={src} alt={image_name} className='image_item' load="lazy"></img>

      <div className="message-area">
        <h3>{image_name}</h3>
      </div>
    </div>
  )
};

export default App

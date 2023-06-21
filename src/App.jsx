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
    default: 4,
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
    <img src={src} alt={image_name} className='image_item'></img>
  )
};

export default App

import Reference from './Reference';

function Images() {
  const keys = Object.keys(Reference).map(key => Reference[key]);

  const imageElements = keys.map(image => (
    <Image data={{ image_name: image.name, src: image.src }} key={image.name} />
  ));

  return <div>{imageElements}</div>;
}

const Image = (props) => {
  const { image_name, src } = props.data;

  return (
        <div className="item">
            <img src={src} alt={image_name} />
        </div>
    )
};

export default Images;

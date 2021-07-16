import classes from './ImageBlock.module.scss';

const ImageBlock = () => {
  return (
    <div
      className={classes.img}
      style={{
        backgroundImage: `url(${'https://images.alphacoders.com/234/thumb-1920-234823.jpg'})`
      }}
    />
  )
}

export default ImageBlock;

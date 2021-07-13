import classes from './BlogItem.module.scss';

const BlogItem = () => {
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${'https://i.stack.imgur.com/y9DpT.jpg'})`
        }}
      />
      <div className={classes.info}>
        <p className={classes.date}>
          Feb 25, 2020
        </p>
        <p className={classes.description}>
          Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia
        </p>
      </div>
    </div>
  )
}

export default BlogItem;

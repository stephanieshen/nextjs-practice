import classes from './BlogOverview.module.scss';

const BlogOverview = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>
        <h4>
          NextJs Dashboard
        </h4>
        <p>
          NextJs, ReactJs, GraphQL
        </p>
        <p className={classes.description}>
          Far far away, behind the word mountains, far 
          from the countries Vokalia and Consonantia, 
          there live the blind texts. Far far away, behind the 
          word mountains, far from the countries Vokalia 
          and Consonantia, there live the blind texts.
        </p>
      </div>

      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${'https://i.stack.imgur.com/y9DpT.jpg'})`
        }}
      />
    </div>
  )
}

export default BlogOverview;

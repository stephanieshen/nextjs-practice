import classes from './WhatIDo.module.scss';

const WhatIDo = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.images}>
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className={classes.img}
              style={{
                backgroundImage: `url(${'https://i.stack.imgur.com/y9DpT.jpg'})`
              }}
            />
          ))}
        </div>
        <div className={classes.description}>
          <p>Intro to ReactJS at University of the Philippines.</p>
          <p>January 10, 2020.</p>
        </div>
      </div>
    </>
  )
}

export default WhatIDo;

import Image from 'next/image';
import classes from './Services.module.scss';
import webDesignImg from '../../public/assets/images/web-design.gif';
import webDevImg from '../../public/assets/images/web-dev.gif';
import mobileDevImg from '../../public/assets/images/mobile-dev.gif';

const Services = () => {
  return (
    <div className={classes.services}>
      <div className={classes.service}>
        <Image src={webDesignImg} alt="web-design" />
        <h4>
          Web Design
        </h4>
        <p>
          Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia, 
          there live the blind texts. 
        </p>
      </div>
      <div className={classes.service}>
        <Image src={webDevImg} alt="web-dev" />
        <h4>
          Web Development
        </h4>
        <p>
          Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia, 
          there live the blind texts. 
        </p>
      </div>
      <div className={classes.service}>
        <Image src={mobileDevImg} alt="mobile-dev" />
        <h4>
          Mobile Development
        </h4>
        <p>
          Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia, 
          there live the blind texts. 
        </p>
      </div>
    </div>
  )
}

export default Services;

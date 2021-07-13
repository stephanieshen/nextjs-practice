import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import classes from './Contact.module.scss';

const Contact = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#1C2127';

    return () => {
      document.body.style.backgroundColor = '#222831';
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.col}>
        <h2>Let's Talk.</h2>
        <div
          className={classes.img}
          style={{
            backgroundImage: `url(${'https://i.stack.imgur.com/y9DpT.jpg'})`
          }}
        />
        <SocialLinks color="ECECEC" />
      </div>

      <div className={classes.col}>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;

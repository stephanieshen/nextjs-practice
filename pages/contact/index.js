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
      <div className={classes.content}>
        <div className={classes.col}>
          <h2 className={classes.title}>
            Let &apos;s Talk<span className={classes.dot}>&nbsp;.</span>
          </h2>
          <div
            className={classes.img}
            style={{
              backgroundImage: 'url(assets/images/contact.gif)'
            }}
          />
          <SocialLinks color="ECECEC" />
        </div>

        <div className={classes.col}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;

import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import classes from './Contact.module.scss';
import Seo from '../../components/Seo/Seo';

const Contact = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#1C2127';

    return () => {
      document.body.style.backgroundColor = '#222831';
    }
  }, []);

  const getSeoData = () => {
    return {
      title: 'Contact - Juan Dela Cruz',
      description: 'I would be happy to set up a meeting with you. Feel free to say hello!',
      image: '/assets/images/profile-pic.png'
    }
  }

  return (
    <>
      <Seo data={getSeoData()} />
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
    </>
  );
}

export default Contact;

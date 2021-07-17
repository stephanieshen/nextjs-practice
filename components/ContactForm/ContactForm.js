import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import classes from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.description}>
        If you have anything that I can help you with, 
        please do leave me a message here...
      </p>

      <div className={classes.formContainer}>
        <FormField
          name="name"
          label="Name"
          type="text"
        />
        <FormField
          name="email"
          label="Email"
          type="email"
        />
        <FormField
          name="message"
          label="Message"
          type="textarea"
        />

        <Button
          type="button"
          classes={['primary']}
          clicked={() => console.log('test')}
        >
          Send
        </Button>
      </div>
    </div>
  )
}

export default ContactForm;

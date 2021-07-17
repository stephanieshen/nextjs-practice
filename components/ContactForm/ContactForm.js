import Button from '../Button/Button';
import InputText from '../FormField/InputText/InputText';
import Textarea from '../FormField/TextArea/TextArea';
import classes from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.description}>
        If you have anything that I can help you with, 
        please do leave me a message here...
      </p>

      <div className={classes.formContainer}>
        <InputText
          name="name"
          placeholder="Name"
          type="text"
        />
        <InputText
          name="email"
          placeholder="Email"
          type="email"
        />
        <Textarea
          placeholder="Message"
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

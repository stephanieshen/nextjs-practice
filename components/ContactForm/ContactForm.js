import FormField from '../FormField/FormField';
import classes from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <div>
      <p>
        If you have anything that I can help you with, 
        please do leave me a message here...
      </p>

      <div>
        <FormField
          name="name"
          label="Name"
          type="text"
        />
        <FormField
          name="email"
          label="Email"
          type="text"
        />
        <FormField
          name="message"
          label="Message"
          type="textarea"
        />
      </div>
    </div>
  )
}

export default ContactForm;

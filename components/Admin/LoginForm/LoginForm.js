import { useRouter } from 'next/dist/client/router';
import Login from '../../../pages/admin/login';
import Button from '../../Button/Button';
import FormField from '../../FormField/FormField';
import classes from './LoginForm.module.scss';

const LoginForm = () => {
  const router = useRouter();

  const login = () => {
    router.replace('/admin/dashboard');
  }

  return (
    <div className={classes.wrapper}>
      <img
        className={classes.logo}
        src src="/assets/images/logo.png"
      />

      <div>
        <FormField
          name="username"
          label="Username"
          type="text"
        />
        <FormField
          name="password"
          label="Password"
          type="password"
        />
        <Button
          width={'100%'}
          type="button"
          classes={['primary']}
          clicked={() => login()}
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default LoginForm;

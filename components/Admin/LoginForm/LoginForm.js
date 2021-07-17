import { useRouter } from 'next/dist/client/router';
import Button from '../../Button/Button';
import InputText from '../../FormField/InputText/InputText';
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
        <InputText
          name="username"
          placeholder="Username"
          type="text"
        />
        <InputText
          name="password"
          placeholder="Password"
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

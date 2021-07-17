import Button from '../../Button/Button';
import FormField from '../../FormField/FormField';
import classes from './Login.module.scss';

const Login = () => {
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
          clicked={() => console.log('test')}
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login;

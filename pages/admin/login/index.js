import LoginForm from '../../../components/Admin/LoginForm/LoginForm';
import classes from './Login.module.scss';

const Login = () => {
  return (
    <div className={classes.wrapper}>
      <LoginForm />
    </div>
  )
}

export default Login;

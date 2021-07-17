import Login from '../../components/Admin/Login/Login';
import classes from './Admin.module.scss';

const Admin = () => {
  return (
    <div className={classes.wrapper}>
      <Login />
    </div>
  )
}

export default Admin;

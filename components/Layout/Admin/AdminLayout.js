import { useRouter } from 'next/dist/client/router';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import AdminNavigation from '../../Admin/AdminNavigation/AdminNavigation';
import classes from './AdminLayout.module.scss';

const AdminLayout = (props) => {
  const router = useRouter();
  const isLoginPage = router.pathname === '/admin/login';

  useEffect(() => {
    document.body.style.backgroundColor = '#1C2127';

    return () => {
      document.body.style.backgroundColor = '#222831';
    }
  }, []);

  return (
    <>
      {isLoginPage ? (
        <main>
          {props.children}
        </main>
      ) : (
        <div className={classes.wrapper}>
          <div className={classes.navWrapper}>
            <AdminNavigation />
          </div>
          <main className={classes.main}>
            {props.children}
          </main>
        </div>
      )}
    </>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node
}

export default AdminLayout;

import { DashboardOutlined, DescriptionOutlined } from '@material-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './AdminNavigation.module.scss';

const AdminNavigation = () => {
  const router = useRouter();

  const isActiveRoute = (path) => {
    return router.pathname === path ? classes.active : '';
  }

  return (
    <div className={classes.wrapper}>
      <nav>
        <img
          className={classes.logo}
          src src="/assets/images/logo.png"
        />

        <ul className={classes.navList}>
          <li className={ isActiveRoute('/admin/dashboard') }>
            <Link href="/admin/dashboard">
              <div className={classes.linkContent}>
                <DashboardOutlined />
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className={ router.pathname.includes('manage-blogs') ? classes.active : '' }>
            <Link href="/admin/manage-blogs">
              <div className={classes.linkContent}>
                <DescriptionOutlined />
                <span>Manage Blogs</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminNavigation;

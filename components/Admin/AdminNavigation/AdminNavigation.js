import { DashboardOutlined, DescriptionOutlined } from '@material-ui/icons';
import Link from 'next/link';
import classes from './AdminNavigation.module.scss';

const AdminNavigation = () => {
  return (
    <div className={classes.wrapper}>
      <nav>
        <img
          className={classes.logo}
          src src="/assets/images/logo.png"
        />

        <ul className={classes.navList}>
          <li>
            <Link href="/admin">
              <div className={classes.linkContent}>
                <DashboardOutlined />
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
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

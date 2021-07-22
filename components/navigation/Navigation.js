
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import classes from './Navigation.module.scss';
import { AccountCircleOutlined, DescriptionOutlined, EmailOutlined, HomeOutlined } from '@material-ui/icons';
import logo from '../../public/assets/images/logo.png';

const Navigation = (props) => {
  const router = useRouter();

  const isActiveRoute = (path) => {
    return router.pathname === path ? classes.active : '';
  }

  return (
    <nav
      className={classes.navigation}
      style={{
        backgroundColor: props.bgColor
      }}
    >
      <div className={classes.logoWrapper}>
        <Image
          className={classes.logo}
          src={logo}
          alt="logo"
        />
      </div>
      <ul className={classes.navList}>
        <li className={ isActiveRoute('/') }>
          <Link href="/" passHref>
            <div>
              <HomeOutlined className={classes.linkIcon} />
              <span className={classes.linkText}>
                Home
              </span>
            </div>
          </Link>
        </li>
        <li className={ isActiveRoute('/about') }>
          <Link href="/about" passHref>
            <div>
              <AccountCircleOutlined className={classes.linkIcon} />
              <span className={classes.linkText}>
                About
              </span>
            </div>
          </Link>
        </li>
        <li className={
          isActiveRoute('/blogs') ||
          isActiveRoute('/blogs/[slug]') 
        }>
          <Link href="/blogs" passHref>
            <div>
              <DescriptionOutlined className={classes.linkIcon} />
              <span className={classes.linkText}>
                Blogs
              </span>
            </div>
          </Link>
        </li>
        <li className={ isActiveRoute('/contact') }>
          <Link href="/contact" passHref>
            <div>
              <EmailOutlined className={classes.linkIcon} />
              <span className={classes.linkText}>
                Contact
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  bgColor: PropTypes.string
}


export default Navigation;

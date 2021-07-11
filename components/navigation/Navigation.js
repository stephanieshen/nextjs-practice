
import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from './Navigation.module.css';

const Navigation = () => {
  const router = useRouter();

  const isActiveRoute = (path) => {
    return router.pathname === path ? classes.active : '';
  }

  return (
    <nav className={classes.navigation}>
      <img
        className={classes.logo}
        src src="/assets/images/logo.png"
      />
      <ul className={classes.navList}>
        <li className={ isActiveRoute('/') }>
          <Link href="/">Home</Link>
        </li>
        <li className={ isActiveRoute('/about') }>
          <Link href="/about">About</Link>
        </li>
        <li className={ isActiveRoute('/blogs') }>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className={ isActiveRoute('/contact') }>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}


export default Navigation;

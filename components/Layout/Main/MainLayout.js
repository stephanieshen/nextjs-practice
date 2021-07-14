import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import classes from './MainLayout.module.scss';

const MainLayout = (props) => {
  const router = useRouter();
  const isContactPage = router.pathname.includes('contact');

  const getBgColor = () => {
    const path = router.pathname;
    if (path.includes('about') ||
        isContactPage) {
          return '#1C2127';
    }

    return '#222831';
  }

  return (
    <div>
      <Navigation bgColor={getBgColor()} />
      <main className={classes.mainContent}>
        {props.children}
      </main>
      {!isContactPage && (
        <Footer />
      )}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout;

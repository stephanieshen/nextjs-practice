import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Footer from '../../Footer/Footer';
import Navigation from '../../Nav/Navigation';
import classes from './MainLayout.module.scss';

const MainLayout = (props) => {
  const router = useRouter();
  const isContactPage = router.pathname.includes('contact');
  const isAboutPage = router.pathname.includes('about');
  const isBlogDetailsPage = router.pathname === '/blogs/[slug]';

  const getBgColor = () => {
    if (isAboutPage ||
        isContactPage ||
        isBlogDetailsPage
    ) {
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

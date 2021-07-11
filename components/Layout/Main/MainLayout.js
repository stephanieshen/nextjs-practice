import PropTypes from 'prop-types';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';

const MainLayout = (props) => {
  return (
    <div>
      <Navigation />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout;

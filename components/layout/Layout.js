import classes from './Layout.module.css';
import PropTypes from 'prop-types';
import Navigation from '../navigation/Navigation';

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <main>
        {props.children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout;

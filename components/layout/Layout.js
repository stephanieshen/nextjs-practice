import classes from './Layout.module.scss';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';

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
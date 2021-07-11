import PropTypes from 'prop-types';
import Navigation from '../../Navigation/Navigation';

const MainLayout = (props) => {
  return (
    <div>
      <Navigation />
      <main>
        {props.children}
      </main>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout;

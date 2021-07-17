import classes from './AdminLayout.module.scss';
import PropTypes from 'prop-types';

const AdminLayout = (props) => {
  return (
    <div>
      <main>
        {props.children}
      </main>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node
}

export default AdminLayout;

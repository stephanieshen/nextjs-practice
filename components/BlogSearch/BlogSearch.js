import PropTypes from 'prop-types';
import { Search } from '@material-ui/icons';
import classes from './BlogSearch.module.scss';

const BlogSearch = (props) => {
  return (
    <div className={classes.wrapper}>
      <input
        className={classes.searchInput}
        type="text"
        placeholder="Find exactly what you are looking for..."
        onChange={(e) => props.onSearch(e.target.value)}
      />
      <Search
        className={classes.searchIcon}
      />
    </div>
  );
}

BlogSearch.propTypes = {
  onSearch: PropTypes.func
}

export default BlogSearch;

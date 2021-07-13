import { Search } from '@material-ui/icons';
import classes from './BlogSearch.module.scss';

const BlogSearch = () => {
  return (
    <div className={classes.wrapper}>
      <input
        className={classes.searchInput}
        type="text"
        placeholder="Find exactly what you are looking for..." 
      />
      <Search
        className={classes.searchIcon}
      />
    </div>
  );
}

export default BlogSearch;

import Textarea from "../../FormField/TextArea/TextArea";
import PropTypes from 'prop-types';

const Text = (props) => {
  return (
    <div>
      <Textarea
        placeholder={props.placeholder}
        height="300px"
        onChangedHandler={props.changed}
      />
    </div>
  )
}

Text.propTypes = {
  placeholder: PropTypes.string,
  changed: PropTypes.func
}

export default Text;

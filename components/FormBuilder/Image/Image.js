import PropTypes from 'prop-types';
import InputFile from "../../FormField/InputFile/InputFile";

const Image = (props) => {

  return (
    <div>
      <InputFile
        uploadHandler={props.changed}
      />
    </div>
  )
}

Image.propTypes = {
  changed: PropTypes.func
}

export default Image;

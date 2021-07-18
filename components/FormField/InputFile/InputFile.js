import { CloudUploadOutlined, RemoveCircle } from '@material-ui/icons';
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './InputFile.module.scss';

const InputFile = (props) => {
  const fileInput = useRef(null);
  const [preview, setPreview] = useState();

  const handleClick = () => {
    fileInput?.current?.click();
  }

  const showPreview = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      setPreview(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    showPreview(file);
    props.fileHandler(file);
  }

  const removeImage = () => {
    props.fileHandler(null);
    setPreview(null);
  }

  return (
    <div className={classes.wrapper}>
      {!preview ? (
        <>
          <button 
            type="button" 
            className={classes.uploadBtn} 
            onClick={handleClick}
          >
            <CloudUploadOutlined />
          </button>
          <input
            type="file" 
            onChange={e => handleUpload(e)}
            className={classes.input}
            ref={fileInput}
          />
        </>
      ) : (
        <div
          className={classes.img}
          style={{
            backgroundImage: `url(${preview})`
          }}
        >
          <RemoveCircle
            className={classes.removeIcon}
            onClick={removeImage}
          />
        </div>
      )}
    </div>
  )
}

InputFile.propTypes = {
  fileHandler: PropTypes.func.isRequired
}

export default InputFile;

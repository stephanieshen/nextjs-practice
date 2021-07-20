import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';
import { CloudUploadOutlined, RemoveCircle } from '@material-ui/icons';
import PropTypes from 'prop-types';
import classes from './InputFile.module.scss';
import storage from '../../../firebase/firebase';

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

    const storageRef = storage.ref();
    const fileRef = storageRef.child(`${uuid()}-${file.name}`);
    const uploadTask = await fileRef.put(file);
    const url = await uploadTask.ref.getDownloadURL();
    setPreview(url);
    props.uploadHandler(url);
  }

  const removeImage = () => {
    props.uploadHandler(null);
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
  uploadHandler: PropTypes.func.isRequired
}

export default InputFile;

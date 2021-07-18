import { CloudUploadOutlined } from '@material-ui/icons';
import React, { useRef } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import storage from '../../../firebase/firebase';
import classes from './InputFile.module.scss';

const InputFile = (props) => {
  const fileInput = useRef(null);

  const handleClick = () => {
      fileInput?.current?.click();
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
    props.uploadHandler(url);
  }

  return (
    <div>
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
    </div>
  )
}

InputFile.propTypes = {
  uploadHandler: PropTypes.func.isRequired
}

export default InputFile;

import { CloudUploadOutlined } from '@material-ui/icons';
import React, { useRef, useState } from 'react';
import classes from './InputFile.module.scss';

const InputFile = () => {
  const fileInput = useRef(null);
  const [isFileAdded, setIsFileAdded] = useState(false);

  const handleClick = () => {
      fileInput?.current?.click();
  }

  const fileSelected = (e) => {
    setIsFileAdded(true);
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
        onChange={e => fileSelected(e)}
        className={classes.input}
        ref={fileInput}
      />
    </div>
  )
}

export default InputFile;

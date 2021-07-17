import Image from '../../../../components/FormBuilder/Image/Image';
import ImageText from '../../../../components/FormBuilder/ImageText/ImageText';
import Text from '../../../../components/FormBuilder/Text/Text';
import TextImage from '../../../../components/FormBuilder/TextImage/TextImage';
import classes from './AddBlog.module.scss';

const AddBlog = () => {
  return (
    <div>
      <Text />
      <ImageText />
      <TextImage />
      <Image />
    </div>
  )
}

export default AddBlog;

import ComponentsMenu from '../../../../components/ComponentsMenu/ComponentsMenu';
import Image from '../../../../components/FormBuilder/Image/Image';
import InputText from '../../../../components/FormField/InputText/InputText';
import classes from './AddBlog.module.scss';

const AddBlog = () => {
  return (
    <div>
      <Image />
      <InputText
        name="title"
        placeholder="Title"
        type="text"
      />

      <ComponentsMenu />
    </div>
  )
}

export default AddBlog;

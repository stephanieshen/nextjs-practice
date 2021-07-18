import { useState } from 'react';
import { cloneDeep } from 'lodash';
import ComponentsMenu from '../../../../components/ComponentsMenu/ComponentsMenu';
import Image from '../../../../components/FormBuilder/Image/Image';
import InputText from '../../../../components/FormField/InputText/InputText';
import Text from '../../.././../components/FormBuilder/Text/Text';
import ImageText from '../../.././../components/FormBuilder/ImageText/ImageText';
import TextImage from '../../.././../components/FormBuilder/TextImage/TextImage';
import { ComponentType } from '../../../../shared/enums/component-type.enum';
import classes from './AddBlog.module.scss';

const AddBlog = () => {
  const [components, setComponents] = useState([]);

  const addComponent = (type) => {
    const allComponents = cloneDeep(components);
    const newComponent = {
      type: type,
      fields: {
        name: `${type}[${allComponents.length}]`,
        value: null
      }
    }
    allComponents.push(newComponent);
    setComponents(allComponents);
  }

  const renderComponent = (type, index) => {
    switch (type) {
      case ComponentType.TEXT:
        return <Text key={index} />;
      case ComponentType.IMAGE_TEXT:
        return <ImageText key={index} />;
      case ComponentType.TEXT_IMAGE:
        return <TextImage key={index} />;
      case ComponentType.IMAGE:
        return <Image key={index} />;
      default:
        return null;
    }
  }

  return (
    <div>
      <Image />
      <InputText
        name="title"
        placeholder="Title"
        type="text"
      />

      {components.map((component, index) => (
        renderComponent(component.type, index)
      ))}

      <ComponentsMenu
        selectHandler={addComponent}
      />
    </div>
  )
}

export default AddBlog;

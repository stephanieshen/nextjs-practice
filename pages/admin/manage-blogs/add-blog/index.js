import { useState } from 'react';
import { cloneDeep } from 'lodash';
import { Form } from 'antd';
import ComponentsMenu from '../../../../components/ComponentsMenu/ComponentsMenu';
import BlogForm from '../../../../components/BlogForm/BlogForm';

const AddBlog = () => {
  const [components, setComponents] = useState([]);
  const [form] = Form.useForm();

  const addComponent = (type) => {
    const allComponents = cloneDeep(components);
    const newComponent = {
      type: type,
      fields: {
        name: `${type}[${allComponents.length}]`,
        value: null,
        imageUrl: null,
        position: null
      }
    }
    allComponents.push(newComponent);
    setComponents(allComponents);
  }

  return (
    <div>
      <BlogForm
        form={form}
        components={components}
      />

      <ComponentsMenu
        selectHandler={addComponent}
      />

    </div>
  )
}

export default AddBlog;

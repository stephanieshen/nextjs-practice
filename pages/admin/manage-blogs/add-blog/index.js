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
        position: allComponents.length
      }
    }
    allComponents.push(newComponent);
    setComponents(allComponents);
  }

  const addBlog = (formValues, components) => {
    console.log(formValues, components);
  }

  return (
    <div>
      <BlogForm
        form={form}
        components={components}
        add={addBlog}
      />

      <ComponentsMenu
        selectHandler={addComponent}
      />

    </div>
  )
}

export default AddBlog;

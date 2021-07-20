import { useState } from 'react';
import { cloneDeep } from 'lodash';
import { useDispatch } from 'react-redux';
import { Form } from 'antd';
import ComponentsMenu from '../../../../components/ComponentsMenu/ComponentsMenu';
import BlogForm from '../../../../components/BlogForm/BlogForm';
import { addBlog } from '../../../../store/Blog/blog-actions';

const AddBlog = () => {
  const dispatch = useDispatch();
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

  const add = (formValues, components) => {
    const blogData = {
      headerImage: formValues.headerImage,
      title: formValues.title,
      components: components
    }

    dispatch(addBlog(blogData));
  }

  return (
    <div>
      <BlogForm
        form={form}
        components={components}
        add={add}
      />

      <ComponentsMenu
        selectHandler={addComponent}
      />

    </div>
  )
}

export default AddBlog;

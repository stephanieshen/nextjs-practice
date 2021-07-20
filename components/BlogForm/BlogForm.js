import { Form } from "antd";
import PropTypes from 'prop-types';
import { ComponentType } from "../../shared/enums/component-type.enum";
import Button from "../Button/Button";
import Image from "../FormBuilder/Image/Image";
import InputText from "../FormField/InputText/InputText";
import ImageText from '../FormBuilder/ImageText/ImageText';
import TextImage from '../FormBuilder/TextImage/TextImage';
import Text from '../FormBuilder/Text/Text';

const BlogForm = (props) => {
  const { form, components } = props;

  const onFinish = (values) => {
    props.add(values, components);
  }

  const renderTextField = (component, index) => {
    return (
      <Form.Item key={index} name={component.fields.name}>
        <Text
          placeholder="Description"
          changed={(e) => {
            component.fields.value = e.target.value;
            form.setFieldsValue({
              [component.fields.name]: component
            });
          }}
        />
      </Form.Item>  
    )
  }

  const renderImageTextField = (component, index) => {
    return (
      <Form.Item key={index} name={component.fields.name}>
        <ImageText
          placeholder="Description"
          changed={(e) => {
            if (e && e.target && e.target.value) {
              component.fields.value = e.target.value;
            } else {
              component.fields.imageUrl = e;
            }
            form.setFieldsValue({
              [component.fields.name]: component
            });
          }}
        />
      </Form.Item>
    )
  }

  const renderTextImageField = (component, index) => {
    return (
      <Form.Item key={index} name={component.fields.name}>
        <TextImage
          placeholder="Description"
          changed={(e) => {
            if (e && e.target && e.target.value) {
              component.fields.value = e.target.value;
            } else {
              component.fields.imageUrl = e;
            }
            form.setFieldsValue({
              [component.fields.name]: component
            });
          }}
        />
      </Form.Item>
    )
  }

  const renderImageField = (component, index) => {
    return (
      <Form.Item key={index} name={component.fields.name}>
        <Image
          changed={(e) => {
            component.fields.imageUrl = e;
            form.setFieldsValue({
              [component.fields.name]: component
            });
          }}
        />
      </Form.Item>
    )
  }

  const renderComponent = (component, index) => {
    switch (component.type) {
      case ComponentType.TEXT:
        return renderTextField(component, index);
      case ComponentType.IMAGE_TEXT:
        return renderImageTextField(component, index);
      case ComponentType.TEXT_IMAGE:
        return renderTextImageField(component, index);
      case ComponentType.IMAGE:
        return renderImageField(component, index);
    }
  }

  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        name="blogs-form"
      >
        <Form.Item name="headerImage">
          <Image
            changed={(e) => {
              form.setFieldsValue({
                headerImage: e
              });
            }}
          />
        </Form.Item>
        <Form.Item name="title">
          <InputText
            name="title"
            placeholder="Title"
            type="text"
            changed={(e) => form.setFieldsValue({
              title: e.target.value
            })}
          />
        </Form.Item>

        {components.map((component, index) => (
          renderComponent(component, index)
        ))}

        <Button
          type="submit"
          classes={['primary']}
        >
          Save
        </Button>
      </Form>
    </div>
  )
}

BlogForm.propTypes = {
  form: PropTypes.any,
  components: PropTypes.array,
  add: PropTypes.func
}

export default BlogForm;

import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';

const BlockButton = styled(Button)`
  width: 100%;
`;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class FormWrapper extends React.Component {
  componentDidMount() {
    this.props.form.setFieldsValue({
      bucketName: `sample`,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const bucketNameError = isFieldTouched('bucketName') && getFieldError('bucketName');

    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={bucketNameError ? 'error' : ''} help={bucketNameError || ''}>
          {getFieldDecorator('bucketName', {
            rules: [{ required: true, message: 'Requires a unique email'}],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Disposable Email"
              addonAfter="@mybucket.com"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <BlockButton type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Create
          </BlockButton>
        </Form.Item>
      </Form>
    );
  }
}

export default FormWrapper = Form.create({ name: 'horizontal_login' })(FormWrapper);

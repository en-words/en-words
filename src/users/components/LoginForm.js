import React, {PropTypes} from 'react';
import { Form, Input, Icon, Modal } from 'antd';

LoginForm.propTypes = {
    form: PropTypes.object.isRequired
};

function LoginForm({ form, onCancel, onLogin, visible }) {
    const {getFieldDecorator} = form;

    return (
        <Modal
            visible={visible}
            title="User login"
            okText="Login"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={onLogin}>

            <Form>
                <Form.Item label="Email:">
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your user email!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Enter email" />
                    )}
                </Form.Item>
                <Form.Item label="Password:">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Enter password" />
                    )}
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default Form.create()(LoginForm);
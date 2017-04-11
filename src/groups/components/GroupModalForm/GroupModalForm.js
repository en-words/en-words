import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const GroupModalForm = (props) => {
    const { visible, onCancel, onCreate, form, title, groupForm } = props;
    const { getFieldDecorator } = form;

    return (
        <Modal
            visible={visible}
            title={title}
            okText="Save"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={onCreate}>

            <Form layout="vertical">
                <FormItem label="Group" hasFeedback>
                    {getFieldDecorator('groupName', {
                        rules: [{ required: true, message: 'Group name is required.' }],
                        initialValue: !groupForm || groupForm === null ? '' : groupForm.groupName
                    })(
                        <Input />
                    )}
                </FormItem>
            </Form>
        </Modal>
    );
};

GroupModalForm.propTypes = {
    //visible: React.PropTypes.boolean.isRequired,
    //title: React.PropTypes.string.isRequired,
    //onCancel: mReact.PropTypes.func.isRequired,
    //onCreate: React.PropTypes.func.isRequired,
    //groupForm: React.PropTypes.object
};

export default Form.create()(GroupModalForm);

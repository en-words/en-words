import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const GroupModalForm = Form.create()(
    (props) => {
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

                <Form vertical>
                    <FormItem label="Group" hasFeedback>
                        {getFieldDecorator('group', {
                            rules: [{ required: true, message: 'Group name is required.' }],
                            initialValue: !groupForm || groupForm === null ? '' : groupForm.group
                        })(
                            <Input />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

class GroupForm extends React.Component {

    handelCloseClick = () => {
        // Clear fields validation
        this.form.resetFields();

        this.props.onCloseForm();
    };

    handelAddClick = () => {
        const { groupForm, onCloseForm } = this.props;
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            if(groupForm === null) {
                this.props.addGroup(values.group);
            } else {
                this.props.updateGroup({
                    groupId: groupForm.groupId,
                    group: values.group});
            }

            form.resetFields();

            onCloseForm();
        });
    };

    saveFormRef = (form) => {
        this.form = form;
    };

    render() {
        let { show, groupForm, onCloseForm } = this.props;
        const title = groupForm === null ? 'New group' : 'Edit group';

        return (
            <GroupModalForm
                ref={this.saveFormRef}
                title={title}
                visible={show}
                groupForm={groupForm}
                onCancel={onCloseForm}
                onCreate={this.handelAddClick} />
        )
    }
}

export default GroupForm;

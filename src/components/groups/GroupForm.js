import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const GroupModalForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form, title } = props;
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
                    <FormItem label="Group">
                        {getFieldDecorator('group', {
                            rules: [{ required: true, message: 'Please enter the group name.' }],
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

    constructor(props) {
        super(props);

        this.handelCloseClick = this.handelCloseClick.bind(this);
        this.handelAddClick = this.handelAddClick.bind(this);
        this.saveFormRef = this.saveFormRef.bind(this);
    }

    render() {
        let { showGroupForm, group } = this.props;
        const title = group === null ? 'New group' : 'Edit group';

        return (
            <GroupModalForm
                ref={this.saveFormRef}
                title={title}
                visible={showGroupForm}
                onCancel={this.handelCloseClick}
                onCreate={this.handelAddClick} />
        )
    }

    handelCloseClick() {
        this.props.closeModal();
    };

    handelAddClick() {
        const { group } = this.props;
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            if(group === null) {
                this.props.addGroup(values.group);
            } else {
                this.props.updateGroup({
                    groupId: group.groupId,
                    group: values.group
                })
            }
            form.resetFields();
        });


    };

    saveFormRef(form){
        this.form = form;
    };
}

export default GroupForm;

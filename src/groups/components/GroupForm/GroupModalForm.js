import React from 'react';
import { reduxForm } from 'redux-form';
import { Modal } from 'antd';

const GroupModalForm = (props) => {

    const { visible, title, onCancel, onCreate } = props;

    return (
        <Modal
            visible={visible}
            title={title}
            okText="Save"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={onCreate}>

            <form>
                <FormItem label="Group">
                    <Input name="groupName" placeholder="Enter group"/>
                </FormItem>
            </form>
        </Modal>
    )
};

GroupModalForm.propTypes = {
    visible: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onCreate: React.PropTypes.func.isRequired
};

export default reduxForm({ form: 'groupForm' })(GroupModalForm);

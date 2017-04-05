import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Modal } from 'antd';

const GroupModalForm = (props) => {

    const { visible, title, onCancel, onOk, groupFormData } = props;

    return (
        <Modal
            visible={visible}
            title={title}
            okText="Save"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={onOk}>

            <form>
                <div>
                    <label htmlFor="groupName">Group Name</label>
                    <Field name="groupName" component="input" type="text" placeholder="Enter group name"/>
                </div>
            </form>
        </Modal>
    )
};

GroupModalForm.propTypes = {
    visible: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onOk: React.PropTypes.func.isRequired
};

export default reduxForm({ form: 'groupForm' })(GroupModalForm);
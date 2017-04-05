import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Modal, Input } from 'antd';

const GroupForm = (props) => {

    const { visible, title, onCancel, onOk } = props;

    const renderField = ({ label, placeholder, type }) => (
        <div>
            <label>{label}</label>
            <div>
                <Input name={name} placeholder={placeholder} type={type}/>
            </div>
        </div>
    );

    return (
        <Modal
            visible={visible}
            title={title}
            okText="Save"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={onOk}>

            <form>
                <Field name="name"
                       label="Group name"
                       component={renderField}
                       type="text"
                       placeholder="Enter group name"/>
            </form>
        </Modal>
    )
};

GroupForm.propTypes = {
    visible: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onOk: React.PropTypes.func.isRequired
};

export default reduxForm({ form: 'groupForm' })(GroupForm);
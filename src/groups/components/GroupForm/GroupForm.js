import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Modal, Input } from 'antd';

class GroupForm extends React.Component {

    render() {
        const {visible, title, onCancel, onOk} = this.props;

        const renderField = ({input, label, placeholder, type}) => (
            <div>
                <label>{label}</label>
                <Input {...input} placeholder={placeholder} type={type}/>
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
                    <Field name="groupName"
                           label="Group name:"
                           component={renderField}
                           type="text"
                           placeholder="Enter group name"/>
                </form>
            </Modal>
        )
    }
}

GroupForm.propTypes = {
    visible: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onOk: React.PropTypes.func.isRequired
};

export default reduxForm({
    form: 'groupForm',
    enableReinitialize: true
})(GroupForm);
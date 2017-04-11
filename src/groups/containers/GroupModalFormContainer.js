import React from 'react';
import { connect } from 'react-redux';

import GroupModalForm from '../components/GroupModalForm';
import * as actions from '../actions/groupsAction';

class GroupModalFormContainer extends React.Component {

    constructor(props) {
        super(props);

        this.saveFormRef = this.saveFormRef.bind(this);
    }

    handelCreateClick = () => {
        const { groupForm, addGroup, updateGroup } = this.props;
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            if(groupForm === null) {
                addGroup(values.groupName);
            } else {
                updateGroup({
                    id: groupForm.id,
                    groupName: values.groupName
                })
            }
            form.resetFields();
        });
        this.props.onClose();
    };

    handelCancelClick = () => {
        this.form.resetFields();
        this.props.onClose();
    };

    saveFormRef(form){
        this.form = form;
    };

    render() {
        let { visible, title, groupForm, onClose } = this.props;

        return (
            <GroupModalForm
                ref={this.saveFormRef}
                title={title}
                visible={visible}
                groupForm={groupForm}
                onCancel={this.handelCancelClick}
                onCreate={this.handelCreateClick} />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addGroup: (name) => dispatch(actions.addGroup(name)),
        updateGroup: (group) => dispatch(actions.updateGroup(group))
    }
};
export default connect(null, mapDispatchToProps)(GroupModalFormContainer);

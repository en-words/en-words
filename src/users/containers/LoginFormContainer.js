import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import * as actions from './../actions/usersAction';

class LoginFormContainer extends React.Component {

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        onCloseModalForm: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired
    };

    render() {
        const { visible } = this.props;

        return (
            <LoginForm
                ref={this.saveFormRef}
                visible={visible}
                onCancel={this.handelCloseClick}
                onLogin={this.handelLoginClick}/>
        )
    }

    handelLoginClick = () => {
        const form = this.form;

        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            this.props.login(values.email, values.password);
            form.resetFields();
            this.props.onCloseModalForm();
        });
    };

    handelCloseClick = () => {
        this.form.resetFields();
        this.props.onCloseModalForm();
    };

    saveFormRef = (form) => {
        this.form = form;
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(actions.login(email, password))
    }
};

export default connect(null, mapDispatchToProps)(LoginFormContainer);

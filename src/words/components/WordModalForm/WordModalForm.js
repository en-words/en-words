import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

class WordModalForm extends Component {

    componentDidMount () {
        //this.nameInput.focus();
    }

    render() {
        const {visible, title = 'Word', onCancel, onCreate, form, wordForm = null} = this.props;
        const {getFieldDecorator} = form;

        return (
            <Modal
                visible={visible}
                title={title}
                okText="Save"
                cancelText="Cancel"
                onCancel={onCancel}
                onOk={onCreate}>

                <Form layout="vertical">
                    <Form.Item label="Word:" hasFeedback>
                        {getFieldDecorator('word', {
                            rules: [{required: true, message: 'Word is required.'}],
                            initialValue: !wordForm || wordForm === null ? '' : wordForm.word
                        })(
                            <Input ref={this.onNameInputCreated} />
                        )}
                    </Form.Item>

                    <Form.Item label="Translation:" hasFeedback>
                        {getFieldDecorator('translation', {
                            rules: [{required: true, message: 'Translation is required.'}],
                            initialValue: !wordForm || wordForm === null ? '' : wordForm.translation
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item label="Comments:">
                        {getFieldDecorator('comments', {
                            initialValue: !wordForm || wordForm === null ? '' : wordForm.comments
                        })(<Input type="textarea"/>)}
                    </Form.Item>
                </Form>
            </Modal>
        );
    }

    onNameInputCreated = (input) => {
        this.nameInput = input;
    }
}

WordModalForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    wordForm: PropTypes.object
};

export default Form.create()(WordModalForm);
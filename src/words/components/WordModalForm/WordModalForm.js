import React, {PropTypes} from 'react';
import { Modal, Form, Input } from 'antd';

WordModalForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    wordForm: PropTypes.object
};

function WordModalForm({visible, title = 'Word', onCancel, onCreate, form, wordForm = null}) {
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
                        <Input />
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

export default Form.create()(WordModalForm);
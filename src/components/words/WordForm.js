import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const WordModalForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form, title, wordForm } = props;
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
                    <FormItem label="Word" hasFeedback>
                        {getFieldDecorator('word', {
                            rules: [{ required: true, message: 'Word is required.' }],
                            initialValue: !wordForm || wordForm === null ? '' : wordForm.word
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem label="Translation" hasFeedback>
                        {getFieldDecorator('translation', {
                            rules: [{ required: true, message: 'Translation is required.' }],
                            initialValue: !wordForm || wordForm === null ? '' : wordForm.translation
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Comments">
                        {getFieldDecorator('comments', {
                            initialValue: !wordForm || wordForm === null ? '' : wordForm.comments
                        })(<Input type="textarea" />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

class WordForm extends React.Component {

    constructor(props) {
        super(props);

        this.handelCloseClick = this.handelCloseClick.bind(this);
        this.handelAddClick = this.handelAddClick.bind(this);
        this.saveFormRef = this.saveFormRef.bind(this);
    }

    render() {
        let { showWordForm, wordForm } = this.props;
        const title = wordForm === null ? 'New word' : 'Edit word';

        return (
            <WordModalForm
                ref={this.saveFormRef}
                title={title}
                visible={showWordForm}
                wordForm={wordForm}
                onCancel={this.handelCloseClick}
                onCreate={this.handelAddClick} />
        )
    }

    handelCloseClick() {
        this.props.closeWordModalForm();
    };

    handelAddClick() {
        const { wordForm, selectedGroup, addWord, updateWord } = this.props;
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            if(wordForm === null) {
                addWord({
                    word: values.word,
                    translation: values.translation,
                    groupId: selectedGroup.groupId,
                    comments: values.comments
                });
            } else {
                updateWord({
                    id: wordForm.id,
                    word: values.word,
                    translation: values.translation,
                    groupId: selectedGroup.groupId,
                    comments: values.comments
                });
            }
            form.resetFields();
        });
    };

    saveFormRef(form){
        this.form = form;
    };
}

export default WordForm;

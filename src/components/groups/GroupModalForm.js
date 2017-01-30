import React from 'react';

import { Button, Modal, ControlLabel, ButtonToolbar } from 'react-bootstrap';
import { Field, Form } from 'react-redux-form';

class GroupModalForm extends React.Component {

    constructor(props) {
        super(props);

        this.handelCloseClick = this.handelCloseClick.bind(this);
        this.handelAddClick = this.handelAddClick.bind(this);
    }

    render() {
        let { showGroupForm, group } = this.props;
        const title = group.groupId === -1 ? 'New group' : 'Edit group';

        console.log("group: " +JSON.stringify(group));
        return (
            <Modal show={showGroupForm} onHide={this.handelCloseClick} >
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form model="group" onSubmit={group => this.handleSubmit(group)}>
                        <Field model="group.groupName">

                            <ControlLabel>Group:</ControlLabel>
                            <input type="text" placeholder="Enter group" autoFocus={true} className="form-control" />
                        </Field>

                        <div className="width-full padding-top-10px padding-bottom-5px">
                            <ButtonToolbar className="align-right">
                                <Button onClick={this.handelCloseClick} bsSize="small" className="align-right padding-top-5px">Close</Button>
                                <Button bsStyle="primary" type="submit" bsSize="small" className="align-right padding-top-5px">Save</Button>
                            </ButtonToolbar>
                        </div>


                    </Form>
                </Modal.Body>
            </Modal>
        )
    }

    handelCloseClick() {
        this.props.closeModal();
    }

    handelAddClick() {
        this.props.addGroup('Test Group 2');
    }

    handleSubmit(group) {
        this.props.addGroup(group.groupName);
    }
}

export default GroupModalForm;

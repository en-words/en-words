import React, { Component } from 'react';

import { FormGroup, ControlLabel, FormControl, Button, Modal } from 'react-bootstrap';

class GroupModalForm extends Component {

    constructor(props) {
        super(props);

        this.handelCloseClick = this.handelCloseClick.bind(this);
        this.handelAddClick = this.handelAddClick.bind(this);
    }

    render() {
        const { showGroupForm } = this.props;

        return (
            <Modal show={showGroupForm} onHide={this.handelCloseClick} >
                <Modal.Header>
                    <Modal.Title>New group</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel>Group:</ControlLabel>
                            <FormControl type="text" placeholder="Enter group" autoFocus={true} />
                        </FormGroup>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.handelCloseClick}>Close</Button>
                    <Button bsStyle="primary" onClick={this.handelAddClick}>Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    handelCloseClick() {
        this.props.closeModal();
    }

    handelAddClick() {
        this.props.addGroup('Test Group 2');
    }
}

export default GroupModalForm;

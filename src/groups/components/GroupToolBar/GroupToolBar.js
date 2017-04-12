import React from 'react';
import { Button } from 'antd';
import './GroupToolBar.css';

const ButtonGroup = Button.Group;

const GroupToolBar = (props) => {
    const { onNewGroup, onEditGroup, onDeleteGroup, selectedGroup } = props;

    return (
        <ButtonGroup id="groupButtons" className="align-right padding-top-5px">
            <Button onClick={onNewGroup} icon="plus-circle-o" />
            <Button onClick={onEditGroup} disabled={!selectedGroup} icon="edit" />
            <Button onClick={onDeleteGroup} disabled={!selectedGroup} icon="delete" />
        </ButtonGroup>
    )
};

GroupToolBar.propTypes = {
    onNewGroup: React.PropTypes.func.isRequired,
    onEditGroup: React.PropTypes.func.isRequired,
    onDeleteGroup: React.PropTypes.func.isRequired,
    selectedGroup: React.PropTypes.object
};

export default GroupToolBar;
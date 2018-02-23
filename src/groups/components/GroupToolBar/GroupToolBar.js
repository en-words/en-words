import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './GroupToolBar.css';

const GroupToolBar = (props) => {
    const { onNewGroup, onEditGroup, onDeleteGroup, selectedGroup } = props;

    return (
        <Button.Group id="groupButtons" className="align-right padding-top-5px padding-right-15px">
            <Button onClick={onNewGroup} icon="plus-circle-o" />
            <Button onClick={onEditGroup} disabled={!selectedGroup} icon="edit" />
            <Button onClick={onDeleteGroup} disabled={!selectedGroup} icon="delete" />
        </Button.Group>
    )
};

GroupToolBar.propTypes = {
    onNewGroup: PropTypes.func.isRequired,
    onEditGroup: PropTypes.func.isRequired,
    onDeleteGroup: PropTypes.func.isRequired,
    selectedGroup: PropTypes.object
};

export default GroupToolBar;
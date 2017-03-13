import React from 'react';
import { Button } from 'antd';
import './GroupToolBar.css';

const ButtonGroup = Button.Group;

const GroupToolBar = (props) => {
    const { handelNewClick, handelEditClick, handelDeleteClick, selectedGroup } = props;

    return (
        <ButtonGroup id="groupButtons" className="align-right padding-top-5px">
            <Button onClick={handelNewClick} icon="plus-circle-o" />
            <Button onClick={handelEditClick} disabled={!selectedGroup} icon="edit" />
            <Button onClick={handelDeleteClick} disabled={!selectedGroup} icon="delete" />
        </ButtonGroup>
    )
};

GroupToolBar.propTypes = {
    handelNewClick: React.PropTypes.func.isRequired,
    handelEditClick: React.PropTypes.func.isRequired,
    handelDeleteClick: React.PropTypes.func.isRequired,
    selectedGroup: React.PropTypes.object
};

export default GroupToolBar;
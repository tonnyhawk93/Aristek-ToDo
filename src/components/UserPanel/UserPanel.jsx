import React from 'react';
import {container, nameClass, iconClass, controls} from './UserPanel.module.scss';
import arrow from '../../icons/arrow_icon.svg';

const UserPanel = ({name, icon}) => {
    return (
        <div className = {container}>
            <div className = {nameClass}>{name}</div>
            <div className = {iconClass}>
                <img src={icon} alt="userIcon" />
            </div>
            <div className = {controls}>
                <img src={arrow} alt="V"/>
            </div>
        </div>
    )
}

export default UserPanel;
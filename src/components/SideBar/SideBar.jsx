import React from "react";
import './SideBar.scss';
import list from '../../icons/list.svg';

const SideBar = () => {
    return (
        <div className = 'SideBar'>
            <div className = 'SideBar__button'>
                <img src={list} alt="list" />
            </div>
        </div>
    )
}

export default SideBar;
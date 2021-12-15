import React from "react";
import './Header.scss';
import UserPanel from "../UserPanel";
import userIcon from "../../icons/userIcon.png";
import logo from '../../icons/logo.svg'

const Header = ({title}) => {
    return (
        <header className = 'Header'>
            <div className = 'Header__left'>
                <div className = 'Header__logo Logo'>
                    <div className = "Logo__image">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className = "Logo__text">To-Do</div>
                </div>
                <h1 className = 'Header__title'>{title}</h1>
            </div>
            <UserPanel name = "Leanne Graham" icon = {userIcon}/>
        </header>
    )
}
export default Header;
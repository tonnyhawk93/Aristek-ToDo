import React from "react";
import './LayOut.scss';
import Header from "../Header";
import SideBar from "../SideBar";

const LayOut = ({children}) => {
    return (
        <div className = "LayOut">
            <div className = "LayOut__header" >
                <Header title = "Tasks"/>
            </div>
            <div className = "LayOut__sideBar">
                <SideBar />
            </div>
            <div className = "LayOut__content">
                {children}
            </div>
        </div>
    )
}

export default LayOut;
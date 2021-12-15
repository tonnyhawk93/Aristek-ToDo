import React from "react";
import {container, modal} from './ErrorMessage.module.scss'
const ErrorMessage = ({message}) => {
    return (
        <div className={container}>
            <div className={modal}>
                {message}
            </div>
        </div>
    )
}
export default ErrorMessage;
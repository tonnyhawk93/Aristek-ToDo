import React from "react";
import {container} from './Tag.module.scss';

const Tag = ({title, count}) => {
    return (
        <div className={container}>
            {`${title}: ${count}`}
        </div>
    )
}
export default Tag;
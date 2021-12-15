import React from 'react';
import {container, todo, tag, left, right} from './ContentLayOut.module.scss';

function ContentLayOut({children}) {
  return ( 
    <div className={container}>
      <div className={left}>
        <div>
          {children[0]}
          <div className={tag}>
            {children[1]}
          </div>         
        </div>
        <div className={todo}>
          {children[2]}
        </div>
      </div>
      <div className={right}>
        {children[3]}
      </div>
    </div>
  );
}

export default ContentLayOut;
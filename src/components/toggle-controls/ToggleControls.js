import React from 'react';
import style from './ToggleControls.module.css';

const ToggleControls = props => (
    <div className={style.main_div}>
        {props.children}
    </div>
)

export default ToggleControls
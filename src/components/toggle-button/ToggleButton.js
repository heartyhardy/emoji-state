import React, { useState } from 'react';
import style from './ToggleButton.module.css';

const ToggleButton = props => (
    <div className={style.main_div}>
        <span
            className={props.currentSet === props.set ? style.button_icon_on : style.button_icon}
            onClick={props.click} 
            icon={props.icon}
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? true : false}
            set={props.set}
        >
            {props.icon}
        </span>
    </div>
)

export default ToggleButton
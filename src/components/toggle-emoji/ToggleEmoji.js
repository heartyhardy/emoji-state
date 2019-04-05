import React from 'react';
import style from './ToggleEmoji.module.css';

const ToggleEmoji = props => (
    <div className={style.main_div}>
        <span
            className={style.emoji}
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? false : true}
        >
            {props.emoji}
        </span>
        <div className={style.switchboard}>
            {
                props.children
            }
        </div>
    </div>
)

export default ToggleEmoji



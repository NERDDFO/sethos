import React from 'react'

import style from '../../all.module.css'

export default ({close, children}) => {

    function preventClose(e) {
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        return false;
    }

    return (
        <div onClick={close} className={style.ModalBack}>
            <div onClick={preventClose} className={style.ModalBox}>
                {close && <a className={style.BackButton} onClick={close}>X</a>}
                {children}
            </div>
        </div>
    )
}
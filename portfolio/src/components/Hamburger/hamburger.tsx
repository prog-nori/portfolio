// import * as React from 'react'
import { Link } from 'react-router-dom'
import '@/components/css/hamburger.css'
import {
    HamburgerMenuContentImpl
} from './hamburgerImpl'

const HamburgerLine = ({type, state}: any) => {
    const classes = ['hamburger-line', `hamburger-line-${type}`]
    if(state) {
        classes.push('opened')
    }
    return (
        <span className={classes.join(' ')}/>
    )
}

export const HamburgerMenu = ({state, onClick}: any) => {
    return (
        <div className={'hamburger-menu-wrapper'} onClick={onClick}>
            <HamburgerLine type='long'  state={state}/>
            <HamburgerLine type='long'  state={state}/>
            <HamburgerLine type='short' state={state}/>
        </div>
    )
}

/**
 * ドロップダウンメニュー
 * @param {boolean} isOpen - メニュー開閉フラグを現したステート 
 * @param {object} contents - メニューのコンテンツ。オブジェクトをラップしたリストであり、要素はlinkとlabel。
 * @returns 
 */
export const HamburgerMenuContent = ({isOpen, contents}: HamburgerMenuContentImpl) => {
    // ハンバーガーメニューのドロップダウン
    const classes = ['dropdown-menu']
    if(isOpen) {
        classes.push('opened')
    }
    return (
        <div className={classes.join(' ')}>
            {
                contents.map((aContent, idx) => (
                    <Link className={['dropdown-list'].join(' ')} to={aContent.link} key={idx}>
                        {aContent.label}
                    </Link>
                ))
            }
        </div>
    )
}
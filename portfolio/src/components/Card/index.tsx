import React, { useEffect, useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import '@/components/css/card.css'
import {
    CardWithImageImpl,
    CardWithSVGImpl,
    CardWithFontImpl,
} from './types'

export const CardWrapper: React.FC<any> = (props) => {
    return (
        <div className={'card-wrapper'} {...props}>
            <div className={'card-row'}>{props.children}</div>
        </div>
    )
}

const CardTitle: React.FC<JSX.IntrinsicElements['div'] & {title: string}> = (props) => {
    return (
        <div style={{
            fontSize: '20px',
            fontWeight: 700,
        }}{...props}>{props.title}</div>
    )
}

export const IconFont: React.FC<JSX.IntrinsicElements['i']> = (props) => {
    return(
        <i
            style={{
                fontSize: '100px'
            }}
            className={props.className}
            />
    )
}

const LevelStars: React.FC<{level: number}> = (props) => {
    let stars = ''
    // #ff4785
    for(let i = 0; i < 7; i++) {
        stars += (props.level >= i? '★': '☆')
    }
    return (
        <div style={{
            fontSize: '20px',
            color: 'rgb(134, 134, 139)'
        }}>level: {stars}</div>
    )
}

export const CardWithImage: React.FC<CardWithImageImpl> = (props) => {
    const {link, title} = props
    const image = "https://pbs.twimg.com/profile_banners/1127977589748854784/1612269330"
    const width = useWindowWidth()
    const getCardWidth = () => (document.querySelector('.card .img')?.clientWidth)
    const [cardWidth, setCardWidth] = useState<number>(getCardWidth() || 0)
    const classes = ['card']

    if (width < 600) {
        classes.push('col-1')
    }else if(width < 750) {
        classes.push('col-2')
    }
    useEffect(() => {
        const value = (getCardWidth() || 0) * 0.52
        if((typeof value ==='number') && isFinite(value)) {
            setCardWidth((getCardWidth() || 0) * 0.52)
        }
        console.log(getCardWidth())
    }, [width])

    return (
        <a className={classes.join(' ')} href={link}>
            <div className='img' style={{
                height: `${cardWidth}px`,
                backgroundImage: `url("${image}")`
                }} />
            <div className='content'>
                <CardTitle title={title} />
                {/* カード下の方に、使用言語や最終更新日などを描きたい。 */}
            </div>
        </a>
    )
}

export const CardWithSVG: React.FC<CardWithSVGImpl> = (props) => {
    const {svg, level, link, title} = props
    const width = useWindowWidth()
    const getCardWidth = () => (document.querySelector('.card .img')?.clientWidth)
    const [cardWidth, setCardWidth] = useState<number>(getCardWidth() || 0)
    const classes = ['card']

    if (width < 600) {
        classes.push('col-1')
    }else if(width < 750) {
        classes.push('col-2')
    }
    useEffect(() => {
        const value = (getCardWidth() || 0) * 0.52
        if((typeof value ==='number') && isFinite(value)) {
            setCardWidth((getCardWidth() || 0) * 0.52)
        }
        console.log(getCardWidth())
    }, [width])

    return (
        <a className={classes.join(' ')} href={link}>
            <div className='img' style={{
                height: `${cardWidth}px`,
                background: '#ddd'
                }}>{svg}</div>
            <div className='content' style={{
                height: `${(document.querySelector('.card')?.clientHeight || 400) - cardWidth}px`
            }}>
                <CardTitle title={title} />
                <LevelStars level={level} />
                {/* カード下の方に、使用言語や最終更新日などを描きたい。 */}
            </div>
        </a>
    )
}

export const CardWithFont: React.FC<CardWithFontImpl> = (props) => {
    // const {image, link, title} = props
    const {font, level, link, title} = props
    const width = useWindowWidth()
    const getCardWidth = () => (document.querySelector('.card .img')?.clientWidth)
    const [cardWidth, setCardWidth] = useState<number>(getCardWidth() || 0)
    const classes = ['card']

    if (width < 600) {
        classes.push('col-1')
    }else if(width < 750) {
        classes.push('col-2')
    }
    useEffect(() => {
        const value = (getCardWidth() || 0) * 0.52
        if((typeof value ==='number') && isFinite(value)) {
            setCardWidth((getCardWidth() || 0) * 0.52)
        }
        console.log(getCardWidth())
    }, [width])

    return (
        <a className={classes.join(' ')} href={link}>
            <div className='img' style={{
                height: `${cardWidth}px`,
                background: '#ddd'
                }}>
                <IconFont className={font} />
            </div>
            <div className='content' style={{
                height: `${(document.querySelector('.card')?.clientHeight || 400) - cardWidth}px`
            }}>
                <CardTitle title={title} />
                <LevelStars level={level} />
                {/* カード下の方に、使用言語や最終更新日などを描きたい。 */}
            </div>
        </a>
    )
}
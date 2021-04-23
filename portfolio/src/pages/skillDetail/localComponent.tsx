import React from 'react'
import {
    IconFont
} from '@/components'
import {
    getSkillname,
    SkillImpl,
    levels,
    periods
} from '@/stores'
import '@/components/css/skilldetail.css'

export const Table: React.FC<JSX.IntrinsicElements['table'] & {
    detail: SkillImpl
}> = (props) => {
    const label: any = {
        skillname: '名称',
        level: '技術レベル',
        period: '利用経験',
        workExperience: '実務経験',
    }
    const dictionary: any = props.detail
    console.log('hoge', dictionary)
    const getStars = (level: number): JSX.Element => {
        const stars = []
        for(let i = 0; i < 7; i++) {
            stars.push(<span className='star' style={{color: (level >= i? '#ff4785': 'rgb(134, 134, 139)')}}>★</span>)
        }
        return (
            <span>
                {stars}
            </span>
        )
    }
    const setTdValue = (key: string): JSX.Element => {
        if(key === 'level') {
            const level: number = Number(dictionary[key])
            return <td>{getStars(level)}<span>({levels[level]})</span></td>
        } else if(key === 'period') {
            const level: number = Number(dictionary[key])
            return <td>{getStars(level)}<span>({periods[level]})</span></td>
        } else if(key === 'workExperience') {
            return <td>{dictionary[key]? 'あり': 'なし'}</td>
        } else {
            return <td>{dictionary[key]}</td>
        }
    }
    return (
        <div className='table-wrapper'>
            <table className='table' {...props}>
                <tbody>
                    {
                        Object.keys(dictionary).map((key: string, idx: number) => {
                            // console.log(key, dictionary[key])
                            // const title = label[key]
                            return label[key] && (
                                <tr key={idx}>
                                    <th>{label[key]}</th>
                                    { setTdValue(key) }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export const flexCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export const Wrapper: React.FC<JSX.IntrinsicElements['div'] & {isSP: boolean}> = (props) => {
    const isNotSP = !props.isSP
    return (
        <div style={{
            ...flexCenter,
            width: !isNotSP? '100%': 'calc(100% + 30px)',
            height: !isNotSP? '400px': '220px',
            margin: !isNotSP? 0: '-45px -15px 0 -15px',
            background: '#fafafa',
        }}>
            <div
                // className={'container'}
                style={{
                    ...flexCenter,
                    width: '100%',
                    maxWidth: '400px',
                    margin: '0 auto',
                }}
                >{props?.children}</div>
        </div>
    )
}

export const WrapperCore: React.FC<JSX.IntrinsicElements['div'] & {detail: any, isPC: boolean}> = (props) => {
    const { detail } = props
    return (
        <div className='img' style={{ 
            ...flexCenter,
            justifyContent: 'space-around',
            height: '200px'
            }}>
            { props.isPC? <h1 className='language-name'>{getSkillname(detail)}</h1>: null }
            { detail.svg && (detail.svg) }
            { detail.icon && (<IconFont className={detail.icon} />) }
        </div>
    )
}
import React, { CSSProperties, useEffect, useState } from 'react'
import '@/components/css/about.css'
import { useWindowWidth } from '@react-hook/window-size'
import {
    isSmartphone,
    // isnotSmartphone,
    objectMerge,
    ifThenObjectMerge,
  }from "@/functions"
  import {
    BrowserView,
    MobileView,
  } from 'react-device-detect'

const setClasses = (pcClasses: string[], spClasses: string[]): string => {
    const [state, setState] = useState(pcClasses)
    const width = useWindowWidth()
    useEffect(() => {
        setState(width > 1000? pcClasses: spClasses)
    }, [width])
    return state.join(' ')
}

const flexCenter = ifThenObjectMerge(isSmartphone(), {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}, {
    flexWrap: 'wrap'
})
  
const View = ({children, style}: any) => {
    return (
        <div style={objectMerge(flexCenter, style)}>{children}</div>
    )
}
  
export const Introduction = ({name, job}: any) => {
    return (
        <View style={{
            flexDirection: 'column',
            height: 'auto'
        }}>
            <BrowserView style={{...flexCenter, flexDirection: 'column'}}>
            <span style={{
                lineHeight: 1.5,
                fontSize: '40px',
                fontWeight: 700,
            }}>{name}</span>
            <span style={{
                lineHeight: 1.5,
                fontSize: '20px',
                fontWeight: 'normal',
                }}>{job}</span>
            </BrowserView>
            <MobileView style={{...flexCenter, marginTop: '25px'}}>
            <span style={{
                lineHeight: 1.5,
                fontSize: '30px',
                fontWeight: 700
                }}>{name}</span>
            <span style={{
                lineHeight: 1.5,
                fontSize: '20px',
                fontWeight: 'normal',
                }}>{job}</span>
            </MobileView>
        </View>
        )
}

export const Container: React.FC<JSX.IntrinsicElements['div']> = (props) => {
    const classes = setClasses(['container'], ['container', 'wrap'])
    return (
        <div className={classes} {...props} />
    )
}

export const MainColumn: React.FC<JSX.IntrinsicElements['div']> = (props) => {
    const classes = setClasses(['column', 'main-column'], ['column', 'main-column', 'sp'])
    return (
        <div className={classes} {...props} />
    )
}

export const SubColumn: React.FC<JSX.IntrinsicElements['div']> = (props) => {
    const classes = setClasses(['column', 'sub-column'], ['column', 'sub-column', 'sp'])
    return (
        <div className={classes} {...props} />
    )
}

export type IntroductionProps = {
    label: string
    value: string | number
}

export const ContentsList: React.FC<JSX.IntrinsicElements['div']& {data: IntroductionProps[]}> = (props) => {
    // const fontStyle: CSSProperties = {
    //     fontSize: '16px',
    //     color: '#fff',
    //     lineHeight: 2.4,
    //     textAlign: 'left',
    //     minWidth: '120px'
    // }
    const childrenStyle = (idx: number) => {
        const aStyle: CSSProperties = {
            fontSize: '16px',
            color: '#fff',
            lineHeight: 2.4,
            textAlign: 'left',
            minWidth: '100px',
            padding: '15px 0',
            borderTop: 'solid 1px #fff',
            height: '50px'
        }
        if(idx !== 0) {
            aStyle.borderBottom = 'solid 1px #fff'
        }
        return aStyle
    }

    return (
        <div>
            <table style={{borderCollapse: 'collapse'}}>
                <tbody>
                    {
                        props.data.map(({label, value}, idx) => (
                            <tr key={idx}>
                                <th style={childrenStyle(idx)}>{label}</th>
                                <td style={childrenStyle(idx)}>{value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
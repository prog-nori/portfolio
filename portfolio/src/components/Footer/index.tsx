import React from 'react'

type YearProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
    format: string
}

type CopylightProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
    year: string | number
    name: string
}

const textStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'rgb(134, 134, 139)',
    fontSize: '12px'
}

const MarginRight5: React.FC<JSX.IntrinsicElements['span']> = (props) => {
    return (
        <span style={{...textStyle, margin: '0 5px 0 0'}} {...props}>{props.children}</span>
    )
}

const Wrapper: React.FC<JSX.IntrinsicElements['div']> = (props) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            maxWidth: '1000px',
            height: '30px',
            minHeight: '30px',
            margin: '0 auto',
            padding: '0 15px',
        }} {...props}>
            {props.children}
        </div>
    )
}

const Year: React.FC<YearProps<'span'>> = (props) => {
    return (
        <div style={{...textStyle, margin: '0'}}>{props.format}</div>
    )
}

const Copylight: React.FC<CopylightProps<'div'>> = (props) => {
    return (
        <span style={textStyle}>
            <MarginRight5>&#169;</MarginRight5><MarginRight5>Copyright</MarginRight5><Year format={`${props.year} ${props.name} All Rights Reserved.`}/></span>
    )
}

export const Footer: React.FC<JSX.IntrinsicElements['footer']> = (props) => {
    return (
        <Wrapper>
            <Copylight year={2021} name={'Noriki KISHI'}/>
        </Wrapper>
    )
}
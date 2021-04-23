type BaseType = JSX.IntrinsicElements['div'] & {
    title: string
    link: string
}

// type Type = keyof {
//     image: string
//     svg: string
//     code: string
// }

export type CardWithImageImpl = BaseType & {
    image?: string
    svg?: never
    font?: never
}

export interface CardWithSVGImpl extends BaseType {
    image?: never
    svg: JSX.Element
    font?: never
    level: number
}

export interface CardWithFontImpl extends BaseType {
    image?: never
    svg?: never
    font: string
    level: number
}

export type CardWithAnyImpl = BaseType & ({
    image : string
    svg  ?: never
    font ?: never
} | {
    image?: never
    svg   : string
    font ?: never
} | {
    image?: never
    svg  ?: never
    font  : string
})

// // export type Props<T extends Type> = JSX.IntrinsicElements['div'] & {
// //     title: string
// //     link: string
// // } & (() => {
// //     if()
// // })


// function gettype() {
//     return {
//         title: '',
//         link: '',
//     }
//     // type Hoge = {}
//     // return Hoge
// }
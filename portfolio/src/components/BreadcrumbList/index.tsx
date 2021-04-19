import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import '@/components/css/breadclumbList.css'

/**
 * リンクの伴ったパンくずリストを返却する
 */
export const BreadcrumbList: React.FC = (props) => {
    const location = useLocation()
    const arr = location.pathname.split('/').filter(word => word !== '')
    const baseURL = 'http://localhost:3000'
    let anURL: string | null = ''
    arr.unshift(anURL)
    return (
        <div className='breadclumb-list-wrapper'>
            {
                arr.map((aString: string, idx: number) => {
                    anURL = `${anURL}${aString}/`
                    return (
                        <div key={idx}>
                            { idx >  0 && <span className='text splitter'>&gt;</span> }
                            { idx >  0 && <a className='text' href={anURL}>{aString}</a> }
                            { idx <= 0 && <a className='text' href={baseURL}>home</a> }
                        </div>
                    )
                })
            }
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useWindowWidth } from '@react-hook/window-size'
import {
    Layout,
    BreadcrumbList
} from '@/components'
import {
    isMatch,
} from '@/stores'
import {
    Table,
    Wrapper,
    WrapperCore,
} from './localComponent'
import '@/components/css/skilldetail.css'

export const SkillDetail: React.FC<{skillname: string}> = (props) => {
    const {skillname}: {skillname: string} = useParams()
    const detail = isMatch(skillname)
    const width = useWindowWidth()
    const [wrapperWidth, setWrapperWidth] = useState(200)
    useEffect(() => {
        setWrapperWidth(width)
    }, [width])
    console.log(detail)
    return detail !== undefined? (
        <Layout>
            <BreadcrumbList />
            <Wrapper isSP={ Boolean(wrapperWidth > 600) }>
                <WrapperCore detail={detail} isPC={ Boolean(wrapperWidth > 600) } />
            </Wrapper>
            <Table detail={detail} />
        </Layout>
    ):(
        <Layout>
            <h1 style={{fontSize: '40px'}}>404</h1>
        </Layout>
    )
}
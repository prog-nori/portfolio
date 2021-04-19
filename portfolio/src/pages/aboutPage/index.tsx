import React from 'react'
import {
    Layout,
    BreadcrumbList
} from '@/components'

export const AboutPage: React.FC = (props) => {
    return (
        <Layout>
            <BreadcrumbList />
            <h1 style={{fontSize: '40px'}}>about page</h1>
        </Layout>
    )
}
import React from 'react'
import {
    Layout,
    BreadcrumbList
} from '@/components'
import { snsList, SNSListProps } from './snsList'
import "@/components/css/sns-icons.css"

export const ContactPage: React.FC = (props) => {
    return (
        <Layout>
            <BreadcrumbList />
            <div className="snsbtniti">
                {
                    snsList.map(({href, category, icon}: SNSListProps, idx: number) => (
                        <a  href={href} className="flowbtn8"　rel="noopener" key={idx}>
                            <i className={`${category} fa-${icon}`} aria-hidden="true" />
                        </a>
                    ))
                }
            </div>
        </Layout>
    )
}
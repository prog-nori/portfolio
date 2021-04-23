import React from 'react'
import {
    CardWithFont,
    CardWithSVG,
    Layout,
    BreadcrumbList,
} from '@/components'
import {
    SkillImpl,
    skills
} from '@/stores/data'

export const SkillPage: React.FC<JSX.IntrinsicElements['main']> = (props) => {
    return (
        <Layout>
            <BreadcrumbList />
            {
                skills.map((aSkill: SkillImpl, idx: number) => {
                    const title = Array.isArray(aSkill.skillname)? aSkill.skillname.join(', '): aSkill.skillname
                    const theFirstSkillname = Array.isArray(aSkill.skillname)? aSkill.skillname[0]: aSkill.skillname
                    const link = `/skills/${theFirstSkillname.toLowerCase()}`
                    if(aSkill.svg) {
                        return (
                            <CardWithSVG
                                title={title}
                                link={link}
                                svg={aSkill.svg}
                                level={aSkill.level}
                                key={idx}
                                />
                        )
                    } else {
                        return (
                            <CardWithFont
                                font={aSkill.icon || ''}
                                link={link}
                                title={title}
                                level={aSkill.level}
                                key={idx}
                                />
                        )
                    }
                })
            }
       </Layout>
    )
}
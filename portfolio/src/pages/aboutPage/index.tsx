import React from 'react'
import {
    Layout,
    MyIcon,
    BreadcrumbList
} from '@/components'
import {
    Container,
    MainColumn,
    SubColumn,
    Introduction,
    IntroductionProps,
    ContentsList
} from './localComponent'

type BirthdayProps = {
    year: number,
    month: number,
    date: number
}

const birthday: BirthdayProps = {
    year: 1999,
    month: 1,
    date: 8
}

const getAge = (): number => {

    const today = new Date();
    const thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.date);
    let age = today.getFullYear() - birthday.year;

    if(today < thisYearsBirthday){
       age--;
    }

    return age;
}

export const AboutPage: React.FC = (props) => {
    const profile: IntroductionProps[] = [
        {
            label: '出身地',
            value: '大阪',
        },
        {
            label: '年齢',
            value: `${getAge()}歳`,
        },
        {
            label: '趣味',
            value: 'プログラミング・飲酒',
        },
        {
            label: '特技',
            value: '景色から場所を特定する(東京・大阪の都市部に限る)',
        },
        {
            label: '母語',
            value: 'Java',
        },
        {
            label: 'ひとこと',
            value: 'フルスタックエンジニアを目指し、勉強中です。まだまだ未熟ですが、よろしくお願いします！',
        },
        {
            label: '彼女',
            value: '募集中',
        },
        // {
        //     label: '',
        //     value: '',
        // },
    ]
    return (
        <Layout>
            <BreadcrumbList />
            <Container>
                <MainColumn>
                    <MyIcon src={`${process.env.PUBLIC_URL}/images/me.png`} />
                    <Introduction name='Noriki KISHI' job='An University Student' />
                </MainColumn>
                <SubColumn>
                    <ContentsList data={profile} />
                </SubColumn>
            </Container>
        </Layout>
    )
}
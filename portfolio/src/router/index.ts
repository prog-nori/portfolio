import {
    IndexPage,
    AboutPage,
    SkillPage,
    WorkPage,
    ContactPage,
    SkillDetail
} from '../pages'
interface RouteProps {
    path: string;
    component: React.FC<any>
}
  
export const routerList: RouteProps[] = [
    {
        path: '/',
        component: IndexPage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
    {
        path: '/skills/:skillname',
        component: SkillDetail,
    },
    {
        path: '/skills/',
        component: SkillPage,
    },
    {
        path: '/work',
        component: WorkPage,
    },
    {
        path: '/contact',
        component: ContactPage,
    }
]
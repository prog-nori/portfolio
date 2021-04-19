import {
    IndexPage,
    AboutPage,
    SkillPage,
    WorkPage,
    ContactPage
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
        path: '/skills',
        component: SkillPage,
    },
    {
        path: '/skill/:skillname',
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
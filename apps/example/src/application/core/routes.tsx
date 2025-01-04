import { lazy } from 'preact-iso';

const Home = lazy(() => import('#pages/home'));
const NotFound = lazy(() => import('#pages/not_found'));
const Example = lazy(() => import('#pages/example'));

const baseRoutes = [
    {
        component: Example,
        path     : '/example_page',
        default  : false,
    }
];

export const exportRoutes = [
    ...baseRoutes,
    {
        component: Home,
        path     : '/example_home',
        default  : false,
    }
];

export const appRoutes = [
    ...baseRoutes,
    {
        component: Home,
        path     : '/',
        default  : false,
    },
    {
        component: NotFound,
        path     : undefined,
        default  : true,
    }
];
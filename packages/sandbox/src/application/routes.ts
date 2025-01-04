import { lazy } from 'preact-iso';

import {exportRoutes} from '@repo/example';

const Home = lazy(() => import('#pages/home'));
const NotFound = lazy(() => import('#pages/not_found'));
const Example = lazy(() => import('#pages/example'));

export const routes = [
    ...exportRoutes,
    {
        component: Home,
        path     : '/',
        default  : false,
    },
    {
        component: Example,
        path     : '/example',
        default  : false,
    },
    {
        component: NotFound,
        path     : undefined,
        default  : true,
    }
];
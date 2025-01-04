import { lazy } from 'preact-iso';

import {exportRoutes} from '@repo/core';

const Home = lazy(() => import('#pages/home'));
const NotFound = lazy(() => import('#pages/not_found'));

export const routes = [
    ...exportRoutes,
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
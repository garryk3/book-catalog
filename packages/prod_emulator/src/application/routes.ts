import { lazy } from 'preact-iso';

// @ts-ignore
import exampleRoutes from 'exampleApp/routes';

const Home = lazy(() => import('#pages/home'));
const NotFound = lazy(() => import('#pages/not_found'));
const Example = lazy(() => import('#pages/example'));

export const routes = [
    ...exampleRoutes,
    {
        component: Home,
        path     : '/',
        default  : false,
    },
    {
        component: Example,
        path     : '/app1',
        default  : false,
    },
    {
        component: NotFound,
        path     : undefined,
        default  : true,
    }
];
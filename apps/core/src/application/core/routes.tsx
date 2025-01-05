import { lazy } from 'preact-iso';

const Home = lazy(() => import('#pages/home'));
const NotFound = lazy(() => import('#pages/not_found'));

export const exportRoutes = [
    {
        component: Home,
        path     : '/book_home',
        default  : false,
        name     : 'Каталог книг',
    }
];

export const appRoutes = [
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
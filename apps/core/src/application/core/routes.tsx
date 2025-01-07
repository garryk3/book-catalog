import { lazy } from 'preact-iso';

import { RouteUrls } from '#infrastructure/constants';

const Home = lazy(() => import('#pages/home'));
const NotFound = lazy(() => import('#pages/not_found'));
const Authors = lazy(() => import('#pages/authors'));
const Categories = lazy(() => import('#pages/categories'));
const Series = lazy(() => import('#pages/series'));
const Book = lazy(() => import('#pages/book'));

export const appRoutes = [
    {
        component: Home,
        path     : RouteUrls.HOME,
        default  : false,
    },
    {
        component: Authors,
        path     : RouteUrls.AUTHORS,
        default  : false,
    },
    {
        component: Categories,
        path     : RouteUrls.CATEGORIES,
        default  : false,
    },
    {
        component: Series,
        path     : RouteUrls.SERIES,
        default  : false,
    },
    {
        component: Book,
        path     : `${RouteUrls.BOOK}/:id`,
        default  : false,
    },
    {
        component: NotFound,
        path     : undefined,
        default  : true,
    }
];
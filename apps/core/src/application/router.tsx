import {
    createRootRoute,
    createRoute,
    createRouter
} from '@tanstack/react-router';

import { RouteUrls } from '#infrastructure/constants';
import { NotFound } from '#pages/not_found';
import { Categories } from '#pages/categories';
import { Series } from '#pages/series';
import { Book } from '#pages/book';
import { Home } from '#pages/home';
import { Authors } from '#pages/authors';

import { AppContainer } from './components/AppContainer';

const rootRoute = createRootRoute({
    component: AppContainer,
});
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path          : RouteUrls.HOME,
    component     : Home,
});
const authorsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path          : RouteUrls.AUTHORS,
    component     : Authors,
});
const categoriesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path          : RouteUrls.CATEGORIES,
    component     : Categories,
});
const seriesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path          : RouteUrls.SERIES,
    component     : Series,
});
const bookRoute = createRoute({
    getParentRoute: () => rootRoute,
    path          : `${RouteUrls.BOOK}/$id`,
    component     : Book,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    authorsRoute,
    categoriesRoute,
    seriesRoute,
    bookRoute
]);

export const router = createRouter({
    routeTree,
    defaultPreload          : 'intent',
    defaultNotFoundComponent: NotFound,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

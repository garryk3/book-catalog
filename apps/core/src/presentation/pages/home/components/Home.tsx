import { h } from 'preact';
import { memo } from 'preact/compat';
import { useLocation } from 'preact-iso';

import {PageLayout} from '#ui/page_layout';

export const Home = memo(() => {
    const { url, } = useLocation();

    return (
        <PageLayout title='Каталог книг'>
            <p>{url}</p>
        </PageLayout>
    );
});

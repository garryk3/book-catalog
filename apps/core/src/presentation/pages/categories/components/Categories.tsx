import { h } from 'preact';
import { memo } from 'preact/compat';
import { useLocation } from 'preact-iso';

import {PageLayout} from '#ui/layouts/index.js';

export const Categories = memo(() => {
    const { url, } = useLocation();

    return (
        <PageLayout title='Категории'>
            <p>{url}</p>
        </PageLayout>
    );
});

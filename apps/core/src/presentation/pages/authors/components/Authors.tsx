import { h } from 'preact';
import { memo } from 'preact/compat';
import { useLocation } from 'preact-iso';

import {PageLayout} from '#ui/layouts/index.js';

export const Authors = memo(() => {
    const { url, } = useLocation();

    return (
        <PageLayout title='Авторы'>
            <p>{url}</p>
        </PageLayout>
    );
});

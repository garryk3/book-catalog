import { h } from 'preact';
import { memo } from 'preact/compat';
import { useLocation } from 'preact-iso';

import {PageLayout} from '#ui/layouts/index.js';

export const Series = memo(() => {
    const { url, } = useLocation();

    return (
        <PageLayout title='Серии'>
            <p>{url}</p>
        </PageLayout>
    );
});

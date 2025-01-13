import { h } from 'preact';
import { memo } from 'preact/compat';

import {PageLayout} from '#ui/layouts/index.js';

export const Authors = memo(() => {
    return (
        <PageLayout title='Авторы'>
            <div></div>
        </PageLayout>
    );
});

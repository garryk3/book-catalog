import { h } from 'preact';
import { memo } from 'preact/compat';
import { useRoute } from 'preact-iso';

import {PageLayout} from '#ui/layouts/index.js';

export const Book = memo(() => {
    const { params, } = useRoute();

    return (
        <PageLayout title={`Book with id: ${params.id}`}>
            <p>description</p>
        </PageLayout>
    );
});

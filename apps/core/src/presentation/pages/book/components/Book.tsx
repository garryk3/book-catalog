import { h } from 'preact';
import { memo } from 'preact/compat';
import { useParams } from '@tanstack/react-router';

import { RouteUrls } from '#infrastructure/constants';
import {PageLayout} from '#ui/layouts/index.js';

export const Book = memo(() => {
    const bookId = useParams({
        from  : `${RouteUrls.BOOK}/$id`,
        select: (params) => params.id,
    });

    return (
        <PageLayout title={`Book with id: ${bookId}`}>
            <p>description title  </p>
        </PageLayout>
    );
});

import { h } from 'preact';
import { memo } from 'preact/compat';
import { Link } from '@tanstack/react-router';

import {PageLayout} from '#ui/layouts';
import { RouteUrls } from '#infrastructure/constants';
import { VirtualList } from '#ui/virtual_list';

import { HomeCard } from './HomeCard';

const testArr = Array(101).fill(0).map((_, index) => ({id: (index + 1).toString(),}));

export const Home = memo(() => {
    return (
        <PageLayout title='Каталог книг'>
            <VirtualList 
                listHeight='100%'
                items={testArr}
                render={(item) => (
                    <Link
                        to={`${RouteUrls.BOOK}/$id`}
                        params={{
                            id: item.id,
                        }}
                    >
                        <HomeCard 
                            title={`Author ${item.id}`}
                            id={+item.id}
                        />
                    </Link>   
                )}
            />
        </PageLayout>
    );
});
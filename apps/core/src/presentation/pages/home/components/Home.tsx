import { h } from 'preact';
import { memo } from 'preact/compat';
import { Link } from '@tanstack/react-router';

import {PageLayout} from '#ui/layouts';
import { RouteUrls } from '#infrastructure/constants';
import { VirtualList } from '#ui/virtual_list';

import { HomeCard } from './HomeCard';
import classes from '../styles.module.css';

const testArr = Array(12).fill(0).map((_, index) => ({id: (index + 1).toString(),}));

export const Home = memo(() => {
    return (
        <PageLayout title='Каталог книг'>
            <div 
                className={classes['home__card-grid']}
            >
                <VirtualList 
                    items={testArr}
                    render={(item) => (
                        <Link
                            to={`${RouteUrls.BOOK}/$id`}
                            params={{
                                id: item.id,
                            }}
                        >
                            <HomeCard 
                                key={item.id} 
                                title={`Author ${item.id}`}
                                id={+item.id}
                            />
                        </Link>   
                    )}
                />
            </div>
        </PageLayout>
    );
});
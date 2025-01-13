import { h } from 'preact';
import { memo } from 'preact/compat';
import { Link } from '@tanstack/react-router';

import {PageLayout} from '#ui/layouts';
import { RouteUrls } from '#infrastructure/constants';

import { HomeCard } from './HomeCard';
import classes from '../styles.module.css';

export const Home = memo(() => {
    return (
        <PageLayout title='Каталог книг'>
            <div 
                className={classes['home__card-grid']}
            >
                {Array.from({length: 10,}, (_, i) => i + 1).map((i) => (
                    <Link
                        to={`${RouteUrls.BOOK}/$id`}
                        params={{
                            id: i.toString(),
                        }}
                    >
                        <HomeCard 
                            key={i} 
                            title={`Author ${i}`}
                            id={i}
                        />
                    </Link>    
                )
                )}
            </div>
        </PageLayout>
    );
});

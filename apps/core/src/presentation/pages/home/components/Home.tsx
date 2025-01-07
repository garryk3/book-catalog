import { h } from 'preact';
import { memo } from 'preact/compat';
import { useLocation } from 'preact-iso';

import {PageLayout} from '#ui/layouts';
import { RouteUrls } from '#infrastructure/constants';

import { HomeCard } from './HomeCard';
import classes from '../styles.module.css';

export const Home = memo(() => {
    const {route,} = useLocation();

    const onClickList: h.JSX.MouseEventHandler<HTMLDivElement> = (evt) => {
        const clickedElement = evt.target as HTMLElement;
        const parentWithType = clickedElement.closest<HTMLDivElement>('[data-id]');

        if(parentWithType) {
            route(`${RouteUrls.BOOK}/${parentWithType.dataset.id}`);
        }
    };
    
    return (
        <PageLayout title='Каталог книг'>
            <div 
                className={classes['home__card-grid']}
                onClick={onClickList}
            >
                {Array.from({length: 10,}, (_, i) => i + 1).map((i) => (
                    <HomeCard 
                        key={i} 
                        title={`Author ${i}`}
                        id={i}
                    />)
                )}
            </div>
        </PageLayout>
    );
});

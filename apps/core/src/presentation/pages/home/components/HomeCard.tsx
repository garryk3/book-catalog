import { Card, Tooltip } from 'antd';
import { h } from 'preact';

import { Title } from '#ui/typography';

import { HomeCardProps } from '../types';
import classes from '../styles.module.css';

export const HomeCard = ({
    title,
}: HomeCardProps) => {
    return (
        <Card 
            title={(
                <Tooltip title={title}>
                    <Title 
                        ellipsis 
                        level={5}
                    >
                        {title}
                    </Title>
                </Tooltip>
            )}
            className={classes.home__card}
        >
            Card content
        </Card>
    );
};
import { h } from 'preact';
import { useLocation } from 'preact-iso';

import {exportRoutes} from '@repo/core';

import './style.css';

export const Header = () => {
    const { url, } = useLocation();

    return (
        <header class='sb__header'>
            <nav>
                <a href="/" className={url == '/' ? 'active': undefined}>
                    Песочница
                </a>
                <hr />
                {exportRoutes.map((route, index) => (
                    <a 
                        key={index} 
                        href={route.path} 
                        className={url === route.path ? 'active': undefined}
                    >
                        {route.name}
                    </a>
                ))}
            </nav>
        </header>
    );
};

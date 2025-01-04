import { h } from 'preact';

import { useLocation } from 'preact-iso';

export const Header = () => {
    const { url, } = useLocation();

    return (
        <header>
            <nav>
                <a href="/" className={url == '/' ? 'active': undefined}>
                    Home
                </a>
                <a href="/app1" className={url == '/example' ? 'active': undefined}>
                    Example App
                </a>
            </nav>
        </header>
    );
};

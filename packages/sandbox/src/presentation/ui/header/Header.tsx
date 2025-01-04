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
                <a href="/example" className={url == '/example' ? 'active': undefined}>
                    Example
                </a>
                <a href="/404" className={url == '/404' ? 'active': undefined}>
                    404
                </a>
                <a href="/example_home" className={url == '/example_home' ? 'active': undefined}>
                    Home From Remotes
                </a>
                <a href="/example_page" className={url == '/example_page' ? 'active': undefined}>
                    Example From Remotes
                </a>
            </nav>
        </header>
    );
};

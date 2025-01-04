import { h } from 'preact';
import { memo } from 'preact/compat';
import { useLocation } from 'preact-iso';

export const Home = memo(() => {
    const { url, } = useLocation();

    return (
        <div>
            <h4>HOME PAGE App "Example"</h4>
            <header>
                <nav>
                    <a href='/example_home' className={url == '/example_home' ? 'active': undefined}>
                        Home From Remote
                    </a>
                    <a href='/example_page' className={url == '/example_page' ? 'active': undefined}>
                        Example From Remote
                    </a>
                </nav>
            </header>
        </div>
    );
});

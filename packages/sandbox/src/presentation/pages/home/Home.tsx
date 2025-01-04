import { h } from 'preact';

import './style.css';

const Resource = (props: any) => {
    return (
        <a href={props.href} className="resource">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </a>
    );
};

export const Home = () => {
    return (
        <div className="home">
            <h1>Песочница для работы с проектами монорепозитория</h1>
            <section>
                <Resource
                    title="Каталог книг"
                    description="Приложение для работы с БД Calibre"
                    href="/book_home"
                />
            </section>
        </div>
    );
};

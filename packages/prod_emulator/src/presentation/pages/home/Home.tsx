import { h } from 'preact';

import './style.css';

const Resource = (props: any) => {
    return (
        <a href={props.href} target="_blank" className="resource">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </a>
    );
};

export const Home = () => {
    return (
        <div className="home">
            <h1>Выберите приложение: </h1>
            <section>
                <Resource
                    title="Приложение 'Example'"
                    description="Описание приложения"
                    href="/app1"
                />
            </section>
        </div>
    );
};

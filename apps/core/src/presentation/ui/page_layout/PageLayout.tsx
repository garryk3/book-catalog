import { h, JSX } from "preact";

import { Title } from "#ui/typography";

export interface PageLayoutProps {
    children: JSX.Element;
    title: string;
}

export const PageLayout = ({ children, title, }: PageLayoutProps) => {
    return (
        <div>
            <Title>{title}</Title>
            {children}
        </div>
    );
};
import { h, JSX } from "preact";
import { Layout } from 'antd';

import { Title } from "#ui/typography";

import classes from '../styles/styles.module.css';

const { Header, Content, } = Layout;

export interface PageLayoutProps {
    children: JSX.Element;
    title: string;
}

export const PageLayout = ({ children, title, }: PageLayoutProps) => {
    return (
        <Layout className={classes.layout}>
            <Header className={classes.header}>
                <Title 
                    type='secondary'
                    level={2}
                    style={{
                        marginBottom: 0,
                    }}
                >
                    {title}
                </Title>
            </Header>
            <Content className={classes.content}>
                {children}
            </Content>
        </Layout>

    );
};
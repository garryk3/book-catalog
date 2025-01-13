import { h, FunctionComponent } from "preact";
import { Layout, Menu } from 'antd';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';
import { useLocation, Link, LinkProps } from "@tanstack/react-router";

import { RouteUrls } from '#infrastructure/constants';

import classes from '../styles/styles.module.css';
import '../styles/resetCSS.module.css';

const { Footer, Sider, Content, } = Layout;
const menuItems = [
    {
        key  : RouteUrls.HOME,
        icon : <UserOutlined />,
        label: <Link {...{to: RouteUrls.HOME,} as LinkProps}>Каталог</Link>,
    },
    {
        key  : RouteUrls.AUTHORS,
        icon : <VideoCameraOutlined />,
        label: <Link {...{to: RouteUrls.AUTHORS,} as LinkProps}>Авторы</Link>,
    },
    {
        key  : RouteUrls.CATEGORIES,
        icon : <UploadOutlined />,
        label: <Link {...{to: RouteUrls.CATEGORIES,} as LinkProps}>Категории</Link>,
    },
    {
        key  : RouteUrls.SERIES,
        icon : <UploadOutlined />,
        label: <Link {...{to: RouteUrls.SERIES,} as LinkProps}>Серии</Link>,
    }
];

export const AppLayout: FunctionComponent = ({ children, }) => {
    const {pathname,} = useLocation();

    return (
        <Layout className={classes.appLayout}>
            <Sider 
                collapsible 
                width="20%"
            >
                <div className={classes.appLayout__sidebar}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={[pathname]}
                        items={menuItems}
                    />
                </div>
            </Sider>
            <Layout>
                <Content className={classes.appLayout__main}>
                    {children}
                </Content>
                <Footer>@Copyright {new Date().getFullYear()}</Footer>
            </Layout>
        </Layout>

    );
};

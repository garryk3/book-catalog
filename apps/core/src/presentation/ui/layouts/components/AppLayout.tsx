import { h, FunctionComponent } from "preact";
import { Layout, Menu } from 'antd';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';
import { useLocation } from "preact-iso";
import { type MenuItemType } from "antd/es/menu/interface";

import { RouteUrls } from '#infrastructure/constants';

import classes from '../styles/styles.module.css';
import '../styles/resetCSS.module.css';
import { useCallback } from "preact/hooks";

const { Footer, Sider, Content, } = Layout;
const menuItems = [
    {
        key  : RouteUrls.HOME,
        icon : <UserOutlined />,
        label: 'Каталог',
    },
    {
        key  : RouteUrls.AUTHORS,
        icon : <VideoCameraOutlined />,
        label: 'Авторы',
    },
    {
        key  : RouteUrls.CATEGORIES,
        icon : <UploadOutlined />,
        label: 'Категории',
    },
    {
        key  : RouteUrls.SERIES,
        icon : <UploadOutlined />,
        label: 'Серии',
    }
];

export const AppLayout: FunctionComponent = ({ children, }) => {
    const {route, url,} = useLocation();

    const onClickMenuItem = useCallback((info: MenuItemType) => {
        route(info.key);
    }, [route]);

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
                        defaultSelectedKeys={[url]}
                        onClick={onClickMenuItem}
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
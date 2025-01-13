import { h } from 'preact';
import { memo } from 'preact/compat';
import {
    Outlet
} from '@tanstack/react-router';
import { App as AntApp, ConfigProvider, theme } from 'antd';

import { AppLayout } from '#ui/layouts';

const themeConfig = {
    algorithm: theme.darkAlgorithm,
    cssVar   : true,
};

export const AppContainer = memo(() => {
    return (
        <ConfigProvider
            variant='filled'
            theme={themeConfig}>
            <AntApp>
                <AppLayout>
                    <Outlet />
                </AppLayout>
            </AntApp>
        </ConfigProvider>
    );
});
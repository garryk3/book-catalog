import { h } from 'preact';
import { memo } from 'preact/compat';
import { LocationProvider, Router, Route, ErrorBoundary } from 'preact-iso';
import { App as AntApp, ConfigProvider, theme } from 'antd';

import { AppLayout } from '#ui/layouts';

import { appRoutes } from './routes';

const themeConfig = {
    algorithm: theme.darkAlgorithm,
    cssVar   : true,
};

export const App = memo<{scope?: string | RegExp}>(({scope,}) => {
    return (
        <ConfigProvider
            variant='filled'
            theme={themeConfig}>
            <AntApp>
                <LocationProvider scope={scope}>
                    <AppLayout>
                        <ErrorBoundary onError={(e) => console.log(e)}>
                            <Router>
                                {appRoutes.map((params, index) => (
                                    <Route 
                                        key={params.path ?? index}
                                        {...params} 
                                    />
                                ))}
                            </Router>
                        </ErrorBoundary>
                    </AppLayout>
                </LocationProvider>
            </AntApp>
        </ConfigProvider>
    );
});

export default App;
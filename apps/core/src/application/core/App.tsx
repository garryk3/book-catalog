import { h } from 'preact';
import { memo } from 'preact/compat';
import { LocationProvider, Router, Route } from 'preact-iso';

import { appRoutes } from './routes';

export const App = memo<{scope?: string | RegExp}>(({scope,}) => {
    return (
        <LocationProvider scope={scope}>
            <main>
                <Router>
                    {appRoutes.map((params, index) => (
                        <Route 
                            key={params.path ?? index}
                            {...params} 
                        />
                    ))}
                </Router>
            </main>
        </LocationProvider>
    );
});

export default App;
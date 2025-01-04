import { h } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from '#ui/header';

import './style.css';
import {routes} from './routes';

export const App = () => {    
    return (
        <LocationProvider>
            <Header />
            <main>
                <Router>
                    {routes.map(({
                        path, 
                        component, 
                        ...params
                    }, index) => (
                        <Route 
                            key={path ?? index}
                            default={params.default}
                            component={component}
                            path={path}
                        />
                    ))}
                </Router>
            </main>
        </LocationProvider>
    );
};
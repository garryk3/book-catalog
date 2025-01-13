import { h } from 'preact';
import { memo, StrictMode } from 'preact/compat';
import { RouterProvider } from '@tanstack/react-router';

import { router } from '../router';

export const App = memo(() => {
    return (
        <StrictMode>
            <RouterProvider 
                router={router} 
            />
        </StrictMode>
    );
});
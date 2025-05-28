import {createBrowserRouter} from 'react-router-dom';
import AppLayout from './AppLayout';
import MainPage from './MainPage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: AppLayout,
        children: [
            {index: true, Component: MainPage},
        ]
    }
]);

export default router;
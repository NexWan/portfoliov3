import {createBrowserRouter} from 'react-router-dom';
import AppLayout from './AppLayout';
import MainPage from './MainPage';
import Projects from './routes/Projects';

const router = createBrowserRouter([
    {
        path: '/',
        Component: AppLayout,
        children: [
            {index: true, Component: MainPage},
            {path: "projects", Component: Projects},
        ]
    }
]);

export default router;
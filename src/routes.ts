import {createBrowserRouter} from 'react-router-dom';
import AppLayout from './AppLayout';
import MainPage from './MainPage';
import Projects from './routes/Projects';
import Experience from './routes/Experience';
import Skills from './routes/Skills';

const router = createBrowserRouter([
    {
        path: '/',
        Component: AppLayout,
        children: [
            {index: true, Component: MainPage},
            {path: "projects", Component: Projects},
            {path: "experience", Component: Experience},
            {path: "skills", Component: Skills},
        ]
    }
]);

export default router;
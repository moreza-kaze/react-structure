import { createBrowserRouter } from 'react-router-dom';
import routes from '../Router';

const baseName = { basename: '/hedieh' };
const router = createBrowserRouter(routes, baseName);
export default router;

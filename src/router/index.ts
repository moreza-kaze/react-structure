import { createBrowserRouter } from 'react-router-dom';
import routes from '../Router';

const baseName = { basename: '/' };
const router = createBrowserRouter(routes, baseName);
export default router;

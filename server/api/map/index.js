import { AsyncRouter } from 'express-async-router';
import * as controller from './map.controller';

const router = new AsyncRouter();

router.get('/', controller.index);

export default router;
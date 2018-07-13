import { AsyncRouter } from 'express-async-router';
import * as controller from './user.controller';
import objectId from 'express-param-objectid';
import paginate from 'express-paginate';
const router = new AsyncRouter();

router.param('id', objectId);

router.use(paginate.middleware(10, 50));

router.get('/', controller.index);
router.get('/:id', controller.get);
router.post('/', controller.create);
router.put('/', controller.login);

export default router;
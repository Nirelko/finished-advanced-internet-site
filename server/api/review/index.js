import { AsyncRouter } from 'express-async-router';
import * as controller from './review.controller';
import objectId from 'express-param-objectid';
import paginate from 'express-paginate';

export default io => {
  const router = new AsyncRouter();

  router.param('id', objectId);

  router.use(paginate.middleware(10, 50));

  router.get('/', controller.index);
  router.get('/byUsername', controller.getByUsername);
  router.get('/:id/recomended', controller.getRecommendedReview);
  router.get('/:id', controller.get);
  router.post('/', controller.create(io));
  router.put('/:id', controller.update(io));
  router.delete('/:id', controller.destroy);

  return router;
};
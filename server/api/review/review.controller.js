import _ from 'lodash';
import empty from 'http-reject-empty';

import categories from '../../../common/consts/categories';
import Review from './review.model';
import User from '../user/user.model';

export function index({ query: { term, filter } }) {
  const query = term && filter ? {
    [filter]: new RegExp(term)
  } : {};

  return Review.find(query);
}

export function get({ params: { id } }) {
  return Review.findById(id)
    .then(empty);
}

export function getRecommendedReview({ params: { id } }) {
  return User.findById(id)
    .then(user => Review.find({})
      .then(allReviews => {
        const userReviews = allReviews.filter(x => x.author === user.userName);
        const notUserReviews = allReviews.filter(x => x.author !== user.userName);

        let categories = userReviews.length ?
          userReviews.map(({ category }) => category) :
          notUserReviews.map(({ category }) => category);

        categories = categories.filter(x => notUserReviews.find(y => y.category === x));
        if (!categories.length) {
          return Promise.resolve({'value':-1});
        }

        const mostUsedCategory = _.maxBy(_.values(_.groupBy(categories)), x => x.length)[0];
        const review = notUserReviews.find(x => x.category === mostUsedCategory);

        return review ? review :
          Promise.resolve({'value':-1});
      }));
}

export function getByUsername() {
  return Review.aggregate([
    {
      $group: {
        _id: '$author',
        count: { $sum: 1 }
      }
    }
  ]);
}

export function create(io) {
  return ({ body: newReview }, res) => Review.create(newReview)
    .then(review => {
      res.status(201);

      io.emit('review', { action: 'insert', review });

      return Promise.resolve();
    });
}

export function update(io) {
  return ({ body: updatedReview, params: { id } }) => Review.findById(id)
    .then(empty)
    .then(review => {
      review.author = updatedReview.author;
      review.content = updatedReview.content;
      review.title = updatedReview.title;
      review.category = updatedReview.category;

      return review.save();
    })
    .then(review => {
      io.emit('review', { action: 'update', review });
    })
    .then(_.noop);
}

export function destroy(io) {
  return ({ params: { id } }) => Review.findById(id)
    .then(empty)
    .then(review => review.remove())
    .then(() => {
      io.emit('review', { action: 'delete', id });
    });
}

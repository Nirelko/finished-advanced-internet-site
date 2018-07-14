import _ from 'lodash';
import empty from 'http-reject-empty';

import Review from './review.model';
import User from '../user/user.model';
import allCategories from '../../../common/consts/categories';

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

const getCategories = userReviews => userReviews.length ?
  userReviews.map(({ category }) => category) :
  [allCategories[_.random(0, allCategories.length - 1)]];

export function getRecommendedReview({ params: { id } }) {
  return User.findById(id)
    .then(user => Review.find({})
      .then(allReviews => {
        const userReviews = allReviews.filter(x => x.author === user.userName);
        const notUserReviews = allReviews.filter(x => x.author !== user.userName);

        const categories = getCategories(userReviews);
        const avg = Math.round(categories.reduce((a, b) => a + b) / categories.length);

        const rec = notUserReviews.find(x => x.category === avg);

        return rec ? Promise.resolve(rec) :
          Promise.reject();
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

      io.emit('review', {action: 'insert', review});

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
      io.emit('review', {action: 'update', review});
    })
    .then(_.noop);
}

export function destroy(io) {
  return ({ params: { id } }) =>  Review.findById(id)
    .then(empty)
    .then(review => review.remove())
    .then(() => {
      io.emit('review', {action: 'delete', id});
    });
}

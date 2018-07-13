import _ from 'lodash';
import empty from 'http-reject-empty';

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
      .then(result => {
        const userReviews = result.filter(x => x.author === user.userName);
        const notUserReviews = result.filter(x => x.author !== user.userName);

        const difficulties = userReviews.map(({ difficulty }) => difficulty);
        const avg = Math.round(difficulties.reduce((a, b) => a + b) / difficulties.length);

        const rec = notUserReviews.find(x => x.difficulty === avg);

        return rec ? Promise.resolve(rec)
          : Promise.reject();
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
  return ({ body }, res) => Review.create(body)
    .then(() => {
      res.status(201);

      io.emit('refresh');

      return Promise.resolve();
    });
}

export function update(io) {
  return ({ body, params: { id } }) => Review.findById(id)
    .then(empty)
    .then(review => {
      review.author = body.author;
      review.content = body.content;
      review.title = body.title;
      review.category = body.category;

      return review.save();
    })
    .then(() => {
      io.emit('refresh');
    })
    .then(_.noop);
}

export function destroy({ params: { id } }) {
  return Review.findById(id)
    .then(empty)
    .then(review => review.remove())
    .then(_.noop);
}

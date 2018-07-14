import User from './user.model';
import empty from 'http-reject-empty';

export function index({ query: { term, filter } }) {
  const query = term && filter ? {
    [filter]: new RegExp(term)
  } : {};

  return User.find(query);
}

export function get({ params: { id } }) {
  return User.findById(id)
    .then(empty);
}

export function login({ body }, res) {
  return User.find(body)
    .then(result => {
      if (result.length !== 1) {
        return Promise.reject();
      }

      res.status(201);

      return result[0];
    });
}

export function create({ body: newUser }, res) {
  newUser.avatarId = Math.floor((Math.random() * 8) + 1);

  return User.create(newUser)
    .then(() => {
      res.status(201);

      return Promise.resolve();
    });
}
import {seed} from 'mongoose-plugin-seed';

export default mongoose => {
  mongoose.Promise = Promise;

  if (process.env.SEED_DB !== 'true') {
    return Promise.resolve();
  }

  return seed(mongoose)
        .then(() => {
          console.log('finished seeding db');
        })
        .catch(err => {
          console.log({err}, 'unable to populate database');
        });
};
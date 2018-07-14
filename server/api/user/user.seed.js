import _ from 'lodash';

export default {
  seed() {
    return [{
      firstname: 'Nirel',
      lastname: 'Yehoyada',
      userName: 'nirelko',
      password: '123',
      avatarId: _.random(1, 8),
      admin: true
    },
    {
      firstname: 'Asaf',
      lastname: 'Liberman',
      userName: 'asafl95',
      password: '123',
      avatarId: _.random(1, 8),
      admin: true
    },
    {
      firstname: 'Niv',
      lastname: 'Zatelmanski',
      userName: 'Nivz',
      password: '123',
      avatarId: _.random(1, 8),
      admin: true
    }];
  }
};
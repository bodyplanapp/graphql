const _ = require('lodash');

const user = require('./user/resolvers');
const post = require('./post/resolvers');

const resolvers = _.merge(post, user)

module.exports =  resolvers 
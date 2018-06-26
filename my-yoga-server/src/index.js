const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const _ = require('lodash');

const user = require('./user');
const post = require('./post');

console.log('post', post)
console.log(_.merge(post, user))

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: _.merge(post, user),
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/bodyplanapp-80c167/hello-world/dev',
    }),
  }),
})
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))
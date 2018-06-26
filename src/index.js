const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const a = require('graphql-import')

const typeDefs = a.importSchema('src/schema.graphql')
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/bodyplanapp-80c167/hello-world/dev',
    }),
  }),
})
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))

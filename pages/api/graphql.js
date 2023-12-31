import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

import typeDefs from "@/graphql/schema"
import resolvers from "@/graphql/resolver"
import allowCors from "@/utils/cors"

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
})

export default allowCors(handler)

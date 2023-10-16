import { ApolloProvider } from '@apollo/client'
import client from "@/graphql/apollo-client"
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

export default function App({ Component, pageProps }) {
  if (__DEV__) {  // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
  }

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />

      <Login />
    </ApolloProvider>
  )
}

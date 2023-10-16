import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { USER_QUERY } from "../graphql/queries";

const middleware = (req, res, next) => {
  if (!req.cookies.token) {
    return res.redirect("/login");
  }

  next();
};

const Protected = ({ Component, pageProps }) => {
  const router = useRouter();
  const { data, loading, error } = useQuery(USER_QUERY);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const user = data.user;

  return (
    <div>
      <h1>Protected Page</h1>

      <p>Welcome, {user.name}!</p>
    </div>
  );
};

Protected.getInitialProps = async (context) => {
  const { data, error } = await useQuery(USER_QUERY);

  if (error) {
    throw error;
  }

  return { user: data.user };
};

export default Protected;
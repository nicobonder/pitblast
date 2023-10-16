// import { useMutation } from '@apollo/client';
// import { LOGIN_MUTATION } from '@/graphql/schema';

// export default function Login() {
//   const [login] = useMutation(LOGIN_MUTATION);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const email = event.target.email.value;
//     const password = event.target.password.value;

//     try {
//       const user = await login({
//         variables: {
//           email,
//           password,
//         },
//       });

//       // El usuario ha iniciado sesión correctamente
//       // Redireccionar a la página protegida
//       console.log(user);
//     } catch (error) {
//       // Manejar el error
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" placeholder="Email" />
//       <input type="password" name="password" placeholder="Contraseña" />
//       <button type="submit">Iniciar sesión</button>
//     </form>
//   );
// }

import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../src/graphql/mutations/LOGIN_MUTATION";

const Login = () => {
  const router = useRouter();
  const [login, { loading, error, data }] = useMutation(LOGIN_MUTATION);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await login({ variables: { email, password } });

      router.push("/protected");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
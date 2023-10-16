import React from 'react'
import '../app/globals.css'

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realiza una consulta GraphQL para verificar las credenciales del usuario
    const { data } = useQuery(GET_USERS, {
      variables: { username, password },
    });

    if (data.users.length > 0) {
      // El usuario existe y su contraseña es correcta
      handleLogin();
    } else {
      // El usuario no existe o su contraseña es incorrecta
      alert("Error de inicio de sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
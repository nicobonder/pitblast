// const resolvers = {
//     Mutation: {
//       login: async (_, { email, password }) => {
//         // Comprueba las credenciales del usuario
//         // Si las credenciales son correctas, devuelve un objeto `User` con la información del usuario
//         // Si las credenciales son incorrectas, lanza un error
  
//         const user = await User.findOne({ email });
//         if (!user) {
//           throw new Error('Invalid email or password');
//         }
  
//         const isPasswordCorrect = await user.comparePassword(password);
//         if (!isPasswordCorrect) {
//           throw new Error('Invalid email or password');
//         }
  
//         return user;
//       },
//     },
//   };
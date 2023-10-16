// const User = {
//   id: { type: 'ID!' },
//   email: { type: 'String!' },
//   password: { type: 'String!' },
// };

// const Mutation = {
//   login: {
//     variables: {
//       email: { type: 'String!' },
//       password: { type: 'String!' },
//     },
//     type: 'Mutation',
//     resolve: async (root, args) => {
//       const { email, password } = args;

//       // Implementar la lógica de la mutación aquí

//       return {
//         user: {
//           lastName: 'García',
//           firstName: 'Juan',
//           email: email,
//         },
//       };
//     },
//   },
// };
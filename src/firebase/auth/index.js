// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '..';

// export const createUser = (email, password) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// };

// export const signInUser = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// };

// export default function Auth({ children, userInteract }) {
//   return <>{children}</>;
// }

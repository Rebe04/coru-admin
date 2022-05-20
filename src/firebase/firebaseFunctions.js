import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { fire } from "firebase/firestore";

export async function firebaseLogin(email, password) {
  try {
    let credenciales = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    // credenciales.user
  } catch (error) {
    return false;
  }
  return true;
}

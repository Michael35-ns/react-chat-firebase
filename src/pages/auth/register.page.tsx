import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "reactfire";

const RegisterPage = () => {
  const auth = useAuth();

  const handleClickGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log("user signed in successfully");
    } catch (error) {
      console.log("Error sigin in with google", error);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <button onClick={handleClickGoogle}>Sign in google</button>
    </div>
  );
};

export default RegisterPage;

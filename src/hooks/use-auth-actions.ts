import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import type { AuthError } from "firebase/auth";
import { useState } from "react";
import { useAuth } from "reactfire";

interface AuthActionResponse {
  success: boolean;
  error: AuthError | null;
}

export const useAuthActions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const login = async (data: {
    email: string;
    password: string;
  }): Promise<AuthActionResponse> => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      return {
        success: true,
        error: null,
      };
    } catch (error) {
      const authError = error as AuthError;
      return {
        success: false,
        error: authError,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: {
    email: string;
    password: string;
    displayName: string;
  }): Promise<AuthActionResponse> => {
    setIsLoading(true);
    try {
      const currentUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      if (currentUser.user) {
        await updateProfile(currentUser.user, {
          displayName: data.displayName,
        });
      }

      return {
        success: true,
        error: null,
      };
    } catch (error) {
      const authError = error as AuthError;
      return {
        success: false,
        error: authError,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async (): Promise<AuthActionResponse> => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      return {
        success: true,
        error: null,
      };
    } catch (error) {
      const authError = error as AuthError;

      return {
        success: false,
        error: authError,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    login,
    register,
    loginWithGoogle,
    logout,
  };
};

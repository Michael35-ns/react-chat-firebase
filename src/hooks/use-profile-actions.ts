import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { useUser } from "reactfire";


export const useProfileActions = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { data: user } = useUser();

  const updateUserProfile = async (data: {
    displayName?: string;
    photoURL?: string;
  }) => {
    if (!user) {
      throw new Error("User is not authenticated");
    }
    setIsLoading(true);
    try {
      await updateProfile(user, {
        displayName: data.displayName || user.displayName,
        photoURL: data.photoURL || user.photoURL,
      });
      return { succes: true };
    } catch (error) {
      console.error("Error updating profile:", error);
      return { success: false };
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { updateUserProfile, isLoading };
};

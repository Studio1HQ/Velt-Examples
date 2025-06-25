import { useVeltClient } from "@veltdev/react";
import { useEffect, useState } from "react";
import { serviceUserAccount } from "../config";
import { User } from "../types";

export default function AuthComponent() {
  const userService = () => {
    // Check if user exists in localStorage
    const storedUser = localStorage.getItem('velt_user');
    if (storedUser) {
      return JSON.parse(storedUser) as User;
    }
    
    // If no stored user, create new one and store it
    const newUser = serviceUserAccount;
    localStorage.setItem('velt_user', JSON.stringify(newUser));
    return newUser;
  };

  const yourAuthenticatedUser = userService();

  const { client } = useVeltClient();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null | unknown>(null);

  useEffect(() => {
    const initVelt = async () => {
      setLoading(true);
      if (client && yourAuthenticatedUser) {
        // Destructure user info
        const {
          uid,
          displayName,
          email,
          photoURL,
          organizationId,
          color,
          textColor,
        } = yourAuthenticatedUser;

        // Create the Velt user object
        const user = {
          userId: uid,
          organizationId: organizationId,
          name: displayName,
          photoUrl: photoURL,
          email,
          color,
          textColor,
        };

        try {
          // Initialize Velt client with the user
          await client.identify(user);
          console.info("Initialized Velt with user:", user);
        } catch (err: Error | null | unknown) {
          setError(err);
          console.error("Error initializing Velt", err);
        } finally {
          setLoading(false);
        }
      }
    };

    initVelt();
  }, [client, yourAuthenticatedUser]);

  if (loading)
    return (
      <div className="bg-[#2f334a] text-white">Connecting to the Velt...</div>
    );
  if (error)
    return (
      <div className="bg-[#2f334a] text-red-400 font-bold text-2xl">
        Failed to connect with the Velt
      </div>
    );
  return null;
}

import { useVeltClient } from "@veltdev/react";
import { useEffect, useState } from "react";
import { serviceUserAccount } from "../config";

export default function AuthComponent() {
  const userService = () => {
    return serviceUserAccount;
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
          console.info("Initialized Velt");
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

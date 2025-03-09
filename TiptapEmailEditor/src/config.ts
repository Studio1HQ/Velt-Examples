import { User } from "./types";
import { GUEST_USERS } from "./utils/constant";
const RandomUser = GUEST_USERS[Math.floor(Math.random() * GUEST_USERS.length)];

const serviceUserAccount: User = {
  uid: RandomUser.userId,
  displayName: RandomUser.name || "User",
  email: RandomUser.email || "",
  photoURL: RandomUser.photoUrl || "",
  organizationId: "Comment-Service-Velt-demo-app",
  color: "#000000", // Default to black if not provided
  textColor: "#FFFFFF", // Default to white if not provided
};
const VELT_API_KEY = import.meta.env.VITE_VELT_API_KEY || "";
export { serviceUserAccount, VELT_API_KEY, };
import { useVeltClient } from '@veltdev/react';
import { useEffect, useState } from 'react';

// Generate random user data
const generateRandomUser = () => {
    const randomId = Math.random().toString(36).substring(2, 15);
    const randomName = `User ${Math.floor(Math.random() * 1000)}`;
    const randomEmail = `user${Math.floor(Math.random() * 1000)}@example.com`;
    const randomOrgId = `org-${Math.random().toString(36).substring(2, 15)}`;

    return {
        userId: `user-${randomId}`,
        name: randomName,
        email: randomEmail,
        organizationId: randomOrgId
    };
};

// [VELT] Initializes the current signed in user in Velt.
export default function VeltInitializeUser() {
    const { client } = useVeltClient();
    const [randomUser] = useState(generateRandomUser());

    // Initialize Velt with random user info
    useEffect(() => {
        if (randomUser && client) {
            client.identify({
                userId: randomUser.userId,
                name: randomUser.name,
                email: randomUser.email,
                organizationId: randomUser.organizationId,
            });
        }
    }, [randomUser, client]);

    return null;
}
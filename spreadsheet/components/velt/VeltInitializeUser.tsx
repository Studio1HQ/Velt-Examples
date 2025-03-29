import { useVeltClient } from '@veltdev/react';
import { useEffect, useState } from 'react';

interface RandomUser {
    userId: string;
    name: string;
    email: string;
    color: string;
    textColor: string;
    organizationId: string;
}

// [VELT] Initializes the current signed in user in Velt with random user data
export default function VeltInitializeUser() {
    const { client } = useVeltClient();
    const [user, setUser] = useState<RandomUser | null>(null);

    // Generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Fetch random user data
    useEffect(() => {
        const fetchRandomUser = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/');
                const data = await response.json();
                const randomUser = data.results[0];

                const newUser: RandomUser = {
                    userId: `user-${Math.floor(Math.random() * 1000)}`,
                    name: `${randomUser.name.first} ${randomUser.name.last}`,
                    email: randomUser.email,
                    color: getRandomColor(),
                    textColor: '#FFFFFF',
                    organizationId: 'space-org-1'
                };

                setUser(newUser);
            } catch (error) {
                console.error('Error fetching random user:', error);
                setUser({
                    userId: 'user-1',
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    color: '#FF5733',
                    textColor: '#FFFFFF',
                    organizationId: 'space-org-1'
                });
            }
        };

        fetchRandomUser();
    }, []);

    // [Velt] Initialize Velt with user info and token
    useEffect(() => {
        if (user && client) {
            client.identify({
                userId: user.userId,
                name: user.name,
                email: user.email,
                organizationId: user.organizationId,
            });
        }
    }, [user, client]);

    return null;
}
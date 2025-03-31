import { useVeltClient } from '@veltdev/react';
import { useEffect, useState } from 'react';
import { User } from '../../lib/types';

// [VELT] Predefined users for the app 
export const USERS: User[] = [
    {
        userId: 'user-bread',
        name: 'Bread',
        email: 'bread@example.com',
        profileUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
        organizationId: 'space-org-2'
    },
    {
        userId: 'user-felix',
        name: 'Felix',
        email: 'felix@example.com',
        profileUrl: 'https://randomuser.me/api/portraits/men/62.jpg',
        organizationId: 'space-org-2'
    }
];

// [VELT] Initializes the current signed in user in Velt with predefined users
export default function VeltInitializeUser() {
    const { client } = useVeltClient();
    const [currentUser, setCurrentUser] = useState<User>(USERS[0]);

    // [VELT] Initialize Velt with user info
    useEffect(() => {
        if (client) {
            client.identify({
                userId: currentUser.userId,
                name: currentUser.name,
                email: currentUser.email,
                organizationId: currentUser.organizationId,
                photoUrl: currentUser.profileUrl
            });
        }
    }, [currentUser, client]);

    // Function to switch users
    const switchUser = () => {
        setCurrentUser(prevUser =>
            prevUser.userId === 'user-bread' ? USERS[1] : USERS[0]
        );
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={switchUser}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow-md hover:bg-primary/90 transition-colors"
            >
                Switch to {currentUser.name === 'Bread' ? 'Felix' : 'Bread'}
            </button>
        </div>
    );
}

export function useVeltUser() {
    const { client } = useVeltClient();
    const [currentUser, setCurrentUser] = useState<User>(USERS[0]);

    useEffect(() => {
        if (client) {
            client.identify({
                userId: currentUser.userId,
                name: currentUser.name,
                email: currentUser.email,
                organizationId: currentUser.organizationId,
                photoUrl: currentUser.profileUrl
            });
        }
    }, [currentUser, client]);

    const switchUser = (user: User) => {
        setCurrentUser(user);
    };

    return {
        currentUser,
        switchUser,
        users: USERS
    };
} 
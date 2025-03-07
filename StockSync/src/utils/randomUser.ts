// Function to generate a random user from the Random User API
export async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        // Generate a random avatar using DiceBear
        const seed = Math.random().toString(36).substring(7);
        const styles = ['adventurer', 'adventurer-neutral', 'avataaars', 'big-ears', 'bottts', 'personas'];
        const randomStyle = styles[Math.floor(Math.random() * styles.length)];
        const avatarUrl = `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${seed}`;

        return {
            userId: `user-${seed}`,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            photoUrl: avatarUrl,
            organizationId: 'inventory-org'
        };
    } catch (error) {
        console.error('Error fetching random user:', error);
        return null;
    }
}

// Function to get or create random user data
export async function getOrCreateRandomUser() {
    // Try to get existing user data from localStorage
    const storedUser = localStorage.getItem('randomUser');
    if (storedUser) {
        return JSON.parse(storedUser);
    }

    // If no stored user, create a new one
    const newUser = await fetchRandomUser();
    if (newUser) {
        localStorage.setItem('randomUser', JSON.stringify(newUser));
        return newUser;
    }

    // Fallback user if everything fails
    const fallbackUser = {
        userId: 'default-user',
        name: 'Anonymous User',
        email: 'anonymous@example.com',
        photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=default',
        organizationId: 'inventory-org'
    };
    localStorage.setItem('randomUser', JSON.stringify(fallbackUser));
    return fallbackUser;
} 
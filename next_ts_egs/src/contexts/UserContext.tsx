// context/UserContext.tsx
'use client'; // Mark as client component (important in Next.js 13+ App Router)

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface User {
	id: string;
	name: string;
	email: string;
	// add other user fields as needed
}

interface UserContextType {
	user: User | null;
	setUser: (user: User | null) => void;
	logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// App wrapper
export const UserProviderWrapper = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	// Optional: Persist User Data
	// To persist user data across page reloads, you can:
	// Use localStorage or sessionStorage inside the provider with useEffect.
	// Use cookies or JWT tokens with server-side authentication.
	// Fetch user data on app load (e.g., via API call in a layout or page).
	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser)
			setUser(JSON.parse(storedUser));
	}, []);
	useEffect(() => {
		if (user)
			localStorage.setItem('user', JSON.stringify(user));
		else
			localStorage.removeItem('user');
	}, [user]);

	const logout = () => {
		setUser(null);
		// Add logout logic here to hit api (e.g., clear tokens, call API)
	};

	return (
		<UserContext.Provider value={{ user, setUser, logout }}>
			{children}
		</UserContext.Provider>
	);
};

// Custom hook for consuming the context
export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};

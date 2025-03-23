import React, { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react';
import { authTokenKey } from './assets/envVariables.js';
import { useCookies } from 'react-cookie';

// Define types for user details and context
interface UserDetails {
	// Define the structure of user details according to your application
	id: string;
	name: string;
	email: string;
	// Add other fields as necessary
}

interface UserContextType {
	userDetails: UserDetails | null;
	updateUserContext: (newUserDetails: UserDetails | null) => void;
	logoutUser: () => void;
}

// Create UserContext with a default value
const UserContext = createContext<UserContextType>({
	userDetails: null,
	updateUserContext: () => { },
	logoutUser: () => { }
});

// Custom hook to use the UserContext
const useAuthContext = () => {
	return useContext(UserContext);
};

// Define props for AuthProvider
interface AuthProviderProps {
	children: ReactNode; // Specify that children are of type ReactNode
}

// Create a provider component -- wrap this around components that need access to the context
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
	const [, , removeCookie] = useCookies([authTokenKey]); // Destructuring to get only required functions

	// Function to update user details in the context
	const updateUserContext = useCallback((newUserDetails: UserDetails | null) => {
		setUserDetails(newUserDetails);
	}, []);

	// Function to log out the user (clear cookies and reset user details)
	const logoutUser = useCallback(() => {
		removeCookie(authTokenKey); // Remove the auth token cookie
		setUserDetails(null);       // Clear user details in state
	}, [removeCookie]);

	// Memoize individual values to avoid unnecessary re-renders
	const memoizedUserDetails = useMemo(() => userDetails, [userDetails]);
	const memoizedUpdateUserContext = useMemo(() => updateUserContext, [updateUserContext]);
	const memoizedLogoutUser = useMemo(() => logoutUser, [logoutUser]);

	return (
		<UserContext.Provider value={{
			userDetails: memoizedUserDetails,
			updateUserContext: memoizedUpdateUserContext,
			logoutUser: memoizedLogoutUser
		}}>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext, useAuthContext, AuthProvider };

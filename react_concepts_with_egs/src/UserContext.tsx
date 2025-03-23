// Working fine with project in TS

import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

// Define the UserDetails interface
interface UserDetails {
	auth_token: string;
	business_id: string;
	first_name: string;
	last_name: string;
}
interface updateUserContextParam {
	data?: UserDetails;
	message: {
		displayMessage: string
	};
}
// Define the AuthContextType interface
interface AuthContextType {
	userDetails: UserDetails | null;
	updateUserContext: (userAuthContext: updateUserContextParam) => void;
	emptyUserContext: () => void;
	updateUserPermittedPages: (permittedPages: string[]) => void; // Adjust type as needed
}

// Create a default context value
const defaultAuthContext: AuthContextType = {
	userDetails: null,
	updateUserContext: () => { },
	emptyUserContext: () => { },
	updateUserPermittedPages: () => { },
};

// Create the AuthContext with a default value
const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// Create a provider component -- use this in all the components for context access.
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

	const updateUserContext = useCallback((userAuthContext: updateUserContextParam) => {
		setUserDetails(userAuthContext.data || null);
	}, []);

	const emptyUserContext = useCallback(() => {
		setUserDetails(null);
	}, []);

	const updateUserPermittedPages = useCallback((permittedPages: string[]) => {
		// Add your logic to update permitted pages here
		console.log(permittedPages);
	}, []);

	return (
		// We can use all these data passes in the key value
		<AuthContext.Provider value={{ userDetails, updateUserContext, emptyUserContext, updateUserPermittedPages }}>
			{children}
		</AuthContext.Provider>
	);
};

// Custom hook to use the AuthContext
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export default AuthContext;

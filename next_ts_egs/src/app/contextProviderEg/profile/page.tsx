"use client"


// components/Profile.tsx
import React from 'react';
import { useUser } from '../../../contexts/UserContext';
import { useState } from 'react';

const Profile = () => {
	const { setUser } = useUser();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		// Replace with your login logic/API call
		const loggedInUser = {
			id: '123',
			name: 'Ujjwal Pandey',
			email,
		};

		setUser(loggedInUser);
	};


	const { user, logout } = useUser();

	if (!user) {
		return <div>
			<h2>Please log in.</h2>
			<p style={{ padding: "1em" }}>
				<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br />
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br />
				<button onClick={handleLogin}>Login</button>
			</p>
		</div>
	}

	return (
		<div>
			<h2>Welcome, {user.name}!</h2>
			<p>Email: {user.email}</p>
			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default Profile;

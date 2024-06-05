import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
	name: 'profile',
	initialState: [{
		user: {
			id: "001",
			name: "",
			age: ""
		}
	}],
	reducers: {
		add: (state, action) => {
			state.user.push({
				id: Date.now(),
				text: action.payload,
				completed: false,
			});
		},
		updateProfile: (state, action) => {
			const index = state.findIndex((eP) => eP.id === action.payload);
			state.user[index].completed = !state.user[index].completed;
		},
		deleteProfile: (state, action) => {
			return state.user.filter((todo) => todo.id !== action.payload);
		}
	}
});

export const { add, updateProfile, deleteProfile } = profileSlice.actions;
export default profileSlice.reducer;

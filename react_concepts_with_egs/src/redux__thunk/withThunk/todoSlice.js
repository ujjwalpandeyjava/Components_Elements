import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("todos/fetchData", async () => {
	try {
		const response = await fetch("https://pokeapi.co/api/v2/ability/4/");
		if (response.status === 200) {
			// throw new Error("sdfsdf");
			return response.json();
		} else {
			console.dir(response);
			// throw new Error(`Server status: ${response.status}`);
		}
	} catch (err) {
		console.error(err.message);
		throw err;
	} finally {
		console.log("finally finished");
	}
});

export const todoSlice = createSlice({
	name: 'todoSlice',
	initialState: {
		todos: [{
			id: Date.now(), // Generate a unique ID
			text: "Default",
			completed: false,
		}],
		tips: {
			name: "todoFeature",
			list: ["a", "b"],
			error: "",
			loading: false,
			data: []
		}
	},
	reducers: {
		addTodo: (state, action) => {
			state.todos.push({
				id: Date.now(), // Generate a unique ID
				text: action.payload,
				completed: false,
			});
		},
		toggleTodoComplete: (state, action) => {
			const todoIndex = state.findIndex((todo) => todo.id === action.payload);
			state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.pending, (state) => {
				console.log("info: in pending");
				state.tips.loading = true;
				state.tips.error = null;
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				console.log("info: in fulfilled: " + action.payload);
				state.tips.loading = false;
				state.tips.error = null;
				state.tips.data = action.payload;
			})
			.addCase(fetchData.rejected, (state, action) => {
				console.log("info: in rejected: " + action.payload);
				state.tips.loading = false;
				state.tips.error = action.error.message;
			})
	}
});

export { fetchData };
export const { addTodo, toggleTodoComplete, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

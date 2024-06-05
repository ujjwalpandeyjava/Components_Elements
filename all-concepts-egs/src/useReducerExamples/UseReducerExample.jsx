import { useReducer } from 'react'
import User from "./User"

/**
 * Inline CSS
 */
const styles = {
	container: {
		padding: "15px 30px",
		minHeight: "150px",
		border: "2px solid gray",
		borderRadius: 5,
		boxShadow: "0px 2px 7px #ccc",
		margin: "10px"
	},
	buttons: {
		display: "flex",
		alignItems: "center",
		gap: "10px"
	}
};


// Initial state value
const userData = [
	{
		id: 1,
		name: 'kunal',
		age: 22,
		admin: true
	},
	{
		id: 2,
		name: 'rounak',
		age: 23,
		admin: false
	},
	{
		id: 3,
		name: 'utkarsh',
		age: 22,
		admin: false
	},
]
function UseReducerExample() {
	/**
	 * The reducer method contains our state updates.
	 * The method takes two arguments, the current state value and an action object.
	 * The action object contains the type of the action and additional data needed to perform the update.
	 */
	const reducerFunction = (state, action) => {
		switch (action.type) {
			case 'addUser': {
				return [...state, action.newUser]
			}
			case 'updateUser': {
				return state.map(user => {
					if (user.id === action.updatedUser.id)
						return action.updatedUser
					return user;
				})
			}
			case 'deleteUser': {
				console.log(action, state.filter(user => user.id !== action.id));
				return state.filter(user => user.id !== action.id);;
			}
			default: {
				return state;
			}
		}
	}
	/**
	 *  The useReducer method gives you a state variable and a dispatch method to make state changes.
	*/
	const [users, setUsers] = useReducer(reducerFunction, userData);



	const handleAddUser = (user) => {
		setUsers({
			type: 'addUser',
			newUser: user
		})
	}
	const handleUpdateUser = (updatedUser) => {
		setUsers({
			type: 'updateUser',
			updatedUser: { ...updatedUser, name: updatedUser.name + "_" }
		})
	}
	const handleDeleteUser = (userId) => {
		console.log(userId);
		setUsers({
			type: 'deleteUser',
			id: userId
		})
	}

	return (
		<div style={styles.container}>
			<h2>UseReducerExample</h2>
			<div style={styles.buttons}>
				<button onClick={() => handleAddUser({ id: ((users?.at(-1)?.id ? users.at(-1).id : 0) + 1), name: 'Ujjwal', age: 25, admin: true })}>Add</button>
				<button onClick={() => handleDeleteUser(users.at(-1).id)}>Delete Last ID</button>
				<button onClick={() => handleUpdateUser(users.at(-1))}>Update</button>
			</div>
			<div>{users.map(user => <User key={user.id} user={user} />)}</div>
		</div>
	)
}

const UseReducerExample2 = () => {
	const initialState = {
		name: '',
		isValid: false,
	};
	function reducerStateHandler(state, action) {
		switch (action.type) {
			case 'CHANGE':
				// Update the state
				return {
					name: action.value,
					isValid: action.value.length >= 3 ? true : false,
				};
			case 'SUBMIT':
				// Reset the state
				return { ...initialState, };
			default:
				return state;
		}
	}
	const [nameState, dispatch] = useReducer(reducerStateHandler, initialState);

	const changeHandler = (event) => {
		dispatch({
			type: 'CHANGE',
			value: event.target.value,
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		alert(nameState.name);
		dispatch({
			type: 'SUBMIT',
			data: ""
		})
	};

	return (
		<div style={styles.container}>
			<h2>UseReducerExample2</h2>
			<form>
				<input type="text" value={nameState.name} style={styles.input} onChange={changeHandler} />
				<button disabled={!nameState.isValid} onClick={submitHandler}>Submit</button>
			</form>
			<span>{nameState.isValid && nameState.name} {!nameState.isValid && <>Name must contain 3 letters</>}</span>
		</div>
	);
};

export { UseReducerExample, UseReducerExample2 }
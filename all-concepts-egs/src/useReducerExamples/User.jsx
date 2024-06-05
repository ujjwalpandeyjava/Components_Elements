const styles = {
	user: {
		backgroundColor: "wheat",
		border: "1px solid lightgray",
		borderRadius: 5,
        padding: "10px",
        margin: "10px",
        boxShadow: "0px 2px 7px #ccc",
        cursor: "pointer",
	}
}

const User = ({ user }) => (
	<div style={styles.user}>
		<h4>{user.id}). {user.name}</h4>
		<p>Age: {user.age}</p>
		<p>Admin: {user.admin ? 'Yes' : 'No'}</p>
	</div>
);
export default User;
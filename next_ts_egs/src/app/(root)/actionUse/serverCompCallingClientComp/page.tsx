import { updateItem } from "@/actions/itemActions";
import ClientComponent from './ClientComponent';


const page = () => {
	console.log("Server component")

	return (
		<>
			<h2>Server Component calling Client Component</h2>
			<ClientComponent createItemAction={updateItem} />
		</>
	)
}
export default page
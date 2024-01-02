import { json } from '@sveltejs/kit'

export async function GET({ params }) {
	const response = await fetch(`http://mc.jwoods.dev:8000/api/v1/players/${params.endpoint}`, {
		method: "GET",
		headers: {
			"Authorization": "ODk1NDE0MzgwNDI5MDc0MjczMDA",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	})
	const onlinePlayers = await response.json()
	return json(onlinePlayers);
}
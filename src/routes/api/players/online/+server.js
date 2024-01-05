import { json } from '@sveltejs/kit'

export async function GET({ fetch }) {
	try {
		// This is the final list that we'll send as page data
		/**
		 * @type {{ name: string; World: string; posX: string; posY: string; posZ: string; }[]}
		 */
		let players = [];
		// This is a string of player names who are currently online
		const onlinePlayers = await fetch(`http://mc.jwoods.dev:8000/api/v1/players/online`, {
			method: "GET",
			headers: {
				"Authorization": "ODk1NDE0MzgwNDI5MDc0MjczMDA",
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			}
		}).then(async (/** @type {any} */ res) => {
			let toJson = await res.json();
			let online = toJson.online;
			return online;
		});

		for (let p of onlinePlayers) {
			await fetch(`http://mc.jwoods.dev:8000/api/v1/players/${p}`, {
				method: "GET",
				headers: {
					"Authorization": "ODk1NDE0MzgwNDI5MDc0MjczMDA",
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				}
			}).then(async res => {
				let toJson = await res.json();
				players.push({
					"name": toJson.name,
					"World": toJson.World,
					"posX": toJson.posX,
					"posY": toJson.posY,
					"posZ": toJson.posZ
				});
			});
		}
		
		return json(players)
	} catch(err) {
		console.log("/api/players/online: ", err)
		return new Response(new Blob(), {
			status: 500
		})
	}
}
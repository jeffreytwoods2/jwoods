/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    /** @type {{ name: string; World: string; posX: string; posY: string; posZ: string; }[]} */
    let players = [];
	try {
        const res = await fetch(`/api/players/online`);
        if (res.status === 200) {
            players = await res.json();
        }
    } catch(err) {
        console.log(err)
    }

    return {
        online: {
            players: players
        }
    }
}
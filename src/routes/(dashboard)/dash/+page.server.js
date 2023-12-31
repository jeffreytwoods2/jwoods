/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const response = await fetch("http://mc.jwoods.dev:8000/api/v1/players/offline", {
        method: "GET",
        headers: {
            "Authorization": "ODk1NDE0MzgwNDI5MDc0MjczMDA",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
    })
    const data = await response.json()
    return data
}
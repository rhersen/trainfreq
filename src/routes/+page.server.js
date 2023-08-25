export async function load({ params }) {
	return { s: JSON.stringify(params) };
}

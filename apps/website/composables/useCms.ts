export default async function () {
	const data = await useFetchWithCache(`${import.meta.env.CMS_URL}/api`)

	return {
		data
	}
}
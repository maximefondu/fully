const Query = async (url: string) => {
    try {
        const response = await fetch(
            `${process.env.STRAPI_API_URL}api/${url}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return await response.json()
    } catch (e) {
        console.error(e)
    }
}

export default Query

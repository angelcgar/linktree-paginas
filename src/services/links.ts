import DataJson from "../assets/json/Links.json";

export const searchLinks = async () => {
  try {
    // const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const response =  DataJson
    // const json = await response.json()

    // const movies = json.Search

    return response
  } catch (e) {
    throw new Error('Error searching movies')
  }
}

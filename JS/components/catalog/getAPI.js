async function getAPI (url) {

    const api_url = url;
    const response= await fetch (api_url)
    const data= await response.json();
    return data;
}
export default getAPI;
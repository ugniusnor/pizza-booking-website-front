async function getAPI (url) {

    const api_url = url;
    const response= await fetch (api_url, {headers: {
        "Content-Type": "application/json;charset=UTF-8"
    }})
      
    const data= await response.json();
    return data;
}
export default getAPI;
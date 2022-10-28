const apiUrl = process.env.REACT_APP_API_URL;

/**
 * fetch for API data access and error handling
 * @param {object} url
 * @returns {object} data
 */
async function customFetch(url, options) {
  try {
    const response = await fetch(`${apiUrl}/api/pokemon${url}`);
    if (response.status < 100 && response.status >= 300) {
      return new Error("Problème d'accès aux données de l'API");
    }
    return response.json();
  } catch {
    console.log("test");
    throw new Error("Problème d'accès aux données de l'API");
  }
}

export async function getAllPokemons() {
  const response = await customFetch("/");
  return response;
}

const apiUrl = process.env.REACT_APP_API_URL;

/**
 * fetch for API data access and error handling
 * @param {object} url
 * @returns {object} data
 */
async function customFetch(url, options) {
  try {
    const response = await fetch(`${apiUrl}/api/pokemon${url}`, options);
    if (response.status < 100 && response.status >= 300) {
      return new Error("Problème d'accès aux données de l'API");
    }
    return response.json();
  } catch {
    throw new Error("Problème d'accès aux données de l'API");
  }
}

export async function postPokemon(newPokemon) {
  const response = await customFetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newPokemon }),
  });
  return response;
}

export async function getAllPokemons() {
  const response = await customFetch("/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function getOnePokemon(id) {
  const response = await customFetch(`/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function putPokemon(id, payload) {
  const response = await customFetch(`/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return response;
}

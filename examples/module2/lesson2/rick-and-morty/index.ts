
import { Character, DefaultApi } from "./api/api-client";


export const getContainerData = () => {
        const CONTAINER_ID = "characters-list"
        const container = document.getElementById(CONTAINER_ID)      
        if(!container) throw new Error("You don't have Container");

        return {container}
}

export const getCharacters = async () => {
    const api = new DefaultApi();
    const {results} = await api.getCharacters();

    if(!results)  throw new Error("You don't have Characters");

    return {results};
}

export const createCharacter = (character: Character) => {
  return `<li> 
        <p> ${character.name}</p>
        <p> ${character.status}</p>
        <img src=${character.image} />
  </li>`
}

export const displayCharacters = (results: Character[], container: HTMLElement) => {

    return results.slice(0, 10).map((character)=> {
        return container.innerHTML += createCharacter(character);
    })
}

export const runApp = async () => {
    const {results} = await getCharacters();
    const {container} = getContainerData();

    displayCharacters(results, container)
}

runApp()
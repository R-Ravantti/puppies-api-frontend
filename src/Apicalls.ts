type DogDTO = {
    id: string,
    name: string,
    breed: string,
    birthdate: string
}

const BASE_PATH: string = 'http://localhost:8080/api/puppies';

async function fetchAllPuppies(setPuppies: React.Dispatch<React.SetStateAction<DogDTO[]>>) {
    const response = await fetch(BASE_PATH);
    const puppiesList: DogDTO[] = await response.json();
    setPuppies(puppiesList);
}

async function addPuppy(event: React.FormEvent<HTMLFormElement>,
    setPuppies: React.Dispatch<React.SetStateAction<DogDTO[]>>) {
    const reqBody: DogDTO = {
        id: event.currentTarget.puppyId.value,
        name: event.currentTarget.puppyName.value,
        breed: event.currentTarget.puppyBreed.value,
        birthdate: event.currentTarget.puppyBirthdate.value,
    };
    const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
    };
    const response = await fetch(BASE_PATH, reqOptions);
    await fetchAllPuppies(setPuppies);
}
async function updatePuppy() {

}

async function deletePuppy(puppyId: string, setPuppies: React.Dispatch<React.SetStateAction<DogDTO[]>>) {
    const reqOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(`${BASE_PATH}/${puppyId}`, reqOptions);
    await fetchAllPuppies(setPuppies);
}

export type { DogDTO };
export { fetchAllPuppies, addPuppy, updatePuppy, deletePuppy };
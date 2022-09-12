const PEOPLE_API = process.env.NX_PEOPLE_API;

export interface PersonModel {
  id: string;
  photo: string;
  firstname: string;
  lastname: string;
  position: string;
  entryDate: string;
  birthDate: string;
  gender: string;
  email: string;
  phone: string;
  isManager: boolean;
  manager: string;
  managerId: string;
}

export async function getPeople(): Promise<PersonModel[]> {
  return fetch(`${PEOPLE_API}`).then((response) => response.json());
}

export async function getPerson(id: string): Promise<PersonModel> {
  return fetch(`${PEOPLE_API}/${id}`).then((response) => response.json());
}

export async function updatePerson(person: PersonModel): Promise<PersonModel> {
  return fetch(`${PEOPLE_API}/${person.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(person),
  }).then((response) => response.json());
}

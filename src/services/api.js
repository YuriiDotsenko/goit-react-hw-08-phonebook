import axios from 'axios';
const BASE_URL = 'https://connections-api.herokuapp.com/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  reset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function getContacts() {
  const { data } = await axios.get(`${BASE_URL}contacts`);

  return data;
}
export async function addContact(contact) {
  const { data } = await axios.post(`${BASE_URL}contacts`, contact);
  return data;
}
export async function removeContact(id) {
  const { data } = await axios.delete(`${BASE_URL}contacts/${id}`);
  return data;
}

export async function registerUser({ name, email, password }) {
  const user = await axios.post(`${BASE_URL}users/signup`, {
    name,
    email,
    password,
  });
  return user;
}

export async function loginUser({ email, password }) {
  const user = await axios.post(`${BASE_URL}users/login`, {
    email,
    password,
  });
  return user;
}

export async function logoutUser() {
  const answer = await axios.post(`${BASE_URL}users/logout`);
  return answer;
}

export async function getCurrentUser() {
  const answer = await axios.get(`${BASE_URL}users/current`);
  return answer;
}

import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
              'x-rapidapi-key': '748c5da387msh4d0ef4bcb35252dp1df0f9jsndb4646e04646'
            }
    });

    return data;
}
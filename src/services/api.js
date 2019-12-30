import axios from 'axios';
import 'dotenv/config';

/*const api = axios
    .get(
        'https://cors-anywhere.herokuapp.com/https://themessenger.mybluemix.net/listoffers'
    )
    .then(response => console.log(response.data));*/

const api = axios.create({
    baseURL: 'https://themessenger.mybluemix.net',
});

export default api;

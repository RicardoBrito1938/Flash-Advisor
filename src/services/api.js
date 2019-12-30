import axios from 'axios';

/*const api = axios
    .get(
        'https://cors-anywhere.herokuapp.com/https://themessenger.mybluemix.net/listoffers'
    )
    .then(response => console.log(response.data));*/

const api = axios.create({
    baseURL:
        'https://cors-anywhere.herokuapp.com/https://themessenger.mybluemix.net/listoffers',
});

export default api;

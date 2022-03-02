
const axios = require('axios');

axios.get('https://www.poemist.com/api/v1/randompoems').then((resp) => {
    console.log(resp.data);
});
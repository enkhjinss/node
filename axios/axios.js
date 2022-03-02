const axios = require('axios');

axios.get('https://www.poemist.com/api/v1/randompoems' , (req , res)).then((data) => {
    console.log(data);
});


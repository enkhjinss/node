const axios = require('axios');

axios.get("https://www.poemist.com/api/v1/randompoems").then((resp) => {
    resp.data.forEach((el , i) => {
        
        axios.get(resp.data[i].url).then((data) => {
            const splitted = data.data.split(" ");
            splitted.forEach((el , i) => {
                if(splitted[i] === "Total" && splitted[i + 1] === "read\n") {
                    
                }
            });


        })
    });
})

const axios = require('axios');

axios.get('https://www.poemist.com/api/v1/randompoems').then((resp) => {
    console.log(resp.data);
});


const axios = require('axios');

axios.get('https://www.poemist.com/api/v1/randompoems%27')
    .then(async function (parentData) {
        let newArr = []

        for (let i = 0; i < parentData.data.length; i++) {

          await axios.get(parentData.data[i].url).then(function (data) {
                const alim = data.data.split(' ')
                for (let index = 0; index < alim.length; index++) {
                    if (alim[index] === 'Total' && alim[index + 1] === 'read\n') {
                        newArr.push({
                            content: parentData.data[i].content,
                            totalRead : alim[index - 1]
                        })
                        break
                    }
                }
            })

        }

        return newArr
    }).then((arr)=>{
        let newOne = []
        for (let i = 0; i < arr.length; i++) {
            newOne.push(arr[i].totalRead)
        }
        const newSort = newOne.sort()[0]

        for (let i = 0; i < arr.length; i++) {
            if(newSort === arr[i].totalRead){
                console.log(arr[i].content);
                break
            }
        }
    })

const request = require('request');

// const API_URL = ''
/* 
    esta es una funcion de orden superior
    (Higher Order Function)
        -> funciones que reciben como argumento otra funcion
*/
// request.get(API_URL, () => {
    // 
// });

const BR_BA_QUOTES = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
request.get(BR_BA_QUOTES, (err, res, body) => {
    if (res.statusCode === 200) {
        const json= JSON.parse(body);
        // console.log(json);
        console.log(json[0].quote);
        console.log(json[0].author);
    } else console.log(res.statusCode, err);
});
// Configuracion
const express = require('express');
const { query } = require('express');
const app = express();

// Endpoints
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

/* 
1.- Agrega un endpoint ‘/api/’ que responda a 
        una petición de tipo GET con un código de estado 200 
        y el siguiente json: 
                    {‘mensaje’:‘hola mundo’}
*/

app.get('/api/', (request, response) => {
    response.status(200).json({mensaje: 'hola mundo'})
});

/*
2.- Agrega un endpoint ‘/api/suma’ que responda a una 
        petición de tipo GET con la suma de dos números que 
        reciba mediante las querys num1 y num2. El servidor
        debe responder con un código de estado 200 y un json 
        como el siguiente:
                        {‘resultado’: 7}
*/

app.get('/api/suma', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const resultado = num1 + num2;
    res.status(200).json({resultado: resultado})
});

/*
3.- Agrega un endpoint ‘/api/usuario/’ que responda a
        una petición de tipo GET con el nombre que sea 
        recibido a través de params. El servidor debe responder
        con un código de estado 200 y un json como este:
                      {‘usuario’: ‘Edwin’}
*/



/*
4.- Agrega un endpoint ‘/api/swapi’ que responda a una
        petición de tipo GET con el personaje solicitado de 
                        https://swapi.co/
        El cliente debe mandar el número de personaje mediante
        params. La respuesta del servidor debe lucir algo así
                    {‘personaje’: {
                        ‘name’: ‘Luke Skywalker’,
                        ...,
                    }}
 */

 // Encender la API
app.listen(3000, () => console.log('Esta vivo'));
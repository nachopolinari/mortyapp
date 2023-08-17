const axios = require('axios');

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((result) => result.data)
        .then((data) => {
            let character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                status: data.status,
                image: data.image
            }

            res.writeHead(200, { 'Conten-type': 'application-json' })
                .end(JSON.stringify(character))
        })
        .catch((error) => res.writeHead(500, { 'Content-type': 'text/plain' })
            .end(error.message))
};

module.exports = {
    getCharById
} 
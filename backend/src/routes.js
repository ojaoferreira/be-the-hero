const express = require('express');

const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rota / Recurso: routes.get('/users', () = {}) => /user é um rota ou recurso.
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Router params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição utilizado para criar ou alterar recursos
 */

// Rota utilizando a passagem de parâmetros nomeados enviados na rota após "?
// ex. /users?page=2&name=João&age=23

// routes.get('/users', (request, response) => {
//     const params = request.query;

//     console.log(params);

//     return response.json({ 
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'João Ferreira'
//      })
// })

// Rota utilizando a passagem de parâmetros 

// routes.get('/users/:id', (request, response) => {
//     const params = request.params;
//     const { id } = request.params;

//     console.log(params, id);

//     return response.json({ 
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'João'
//      })
// })

// Request body: Corpo da requisição utilizado para criar ou alterar recursos

// routes.post('/users', (request, response) => {
//     const body = request.body;

//     console.log(body)

//     response.json({
//         "message": "User adding with success!"
//     })
// });

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;
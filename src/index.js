const express = require('express');
const { request } = require('express');

const app = express();

/** 
 * GET: Buscar informações no back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/*
Query Params: Filtros e paginação
Route Params:
Request Body:
* */
app.get('/projects', (request, response)=>{
    const { title, owner } = request.query;
    console.log(title);
    console.log(owner)
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ])
});

app.post('/projects',(request, response)=>{
    return response.json([
        'Projeto 3'
    ])
})
app.put('/projects/:id',(request, response)=>{
    return response.json([
        'Projeto 3'
    ])
})
app.delete('/projects/:id',(request, response)=>{
    return response.json([
        'Projeto 3'
    ])
})



app.listen(3333, ()=>{
    console.log('🚀 Back-end started!');
});
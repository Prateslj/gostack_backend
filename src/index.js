const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello world!' });
});

app.get('/projects', (request, response) => {
    const { title, owner } = request.query;

    console.log(title);
    console.log(owner);

    return response.json(['project1','project2']);
});

app.post('/projects', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({ massage: "Project created successfuly!"});
});

app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({ massage: "Project modified."});
});

app.delete('/projects/:id', (request, response) => {
    return response.json({ massage: "Project deleted."});
});

app.listen(3333, () => {
    console.log('🚀 Back-end started!');
});
 

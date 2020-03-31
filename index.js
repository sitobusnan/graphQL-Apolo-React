import express from 'express'
import garaphqlHTTP from 'express-graphql'

import schema from './schema'
import graphqlHTTP from 'express-graphql';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Funciona')
});

const root = { hola: () => "Hola mundo" }

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(PORT, () => { console.log(`Escuchando en el puerto ${PORT}`) })
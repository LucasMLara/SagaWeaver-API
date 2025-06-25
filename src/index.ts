import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';
import { typeDefs } from './graphql/schema';
import dotenv from 'dotenv';
import { loadResolvers } from './graphql/loadResolvers';
import { ErrorHandlingPlugin } from './graphql/plugins/ErrorHandlingPlugin';

dotenv.config();

async function startServer() {
    const app = express();

    const resolvers = await loadResolvers();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ErrorHandlingPlugin],
    });

    await server.start();

    app.use(
        '/graphql',
        cors(),
        bodyParser.json(),
        expressMiddleware(server, {
            context: async ({ req, res }) => ({ req, res })
        }),
    );

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    });
}

startServer();

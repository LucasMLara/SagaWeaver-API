import { ApolloServerPlugin, GraphQLRequestContext } from '@apollo/server';
import { MyContext } from '../context';


export const ErrorHandlingPlugin: ApolloServerPlugin<MyContext> = {
    async requestDidStart() {
        return {
            async didEncounterErrors(requestContext: GraphQLRequestContext<MyContext>) {
                for (const err of requestContext.errors ?? []) {
                    console.error(`[GraphQL Error] ${err.message}`, err);

                    if (
                        err.message.includes('database') ||
                        err.message.includes('Prisma')
                    ) {
                        err.message = 'Erro interno do servidor';
                    }
                }
            },
        };
    },
};

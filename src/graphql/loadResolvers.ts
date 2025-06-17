import path from 'path';
import { promisify } from 'util';
import { glob as globCallback } from 'glob';

const glob = promisify(globCallback);

type ResolverObject = {
    Query?: Record<string, unknown>;
    Mutation?: Record<string, unknown>;
};

export const loadResolvers = async (): Promise<ResolverObject> => {
    const resolverFiles = await glob(path.join(__dirname, 'resolvers', '*.ts'), {}) as string[];

    const resolversArray = await Promise.all(
        resolverFiles.map(async (file) => {
            const module = await import(file);
            return module.default || Object.values(module)[0];
        })
    );

    return resolversArray.reduce<ResolverObject>((acc, resolver) => {
        return {
            Query: { ...acc.Query, ...resolver.Query },
            Mutation: { ...acc.Mutation, ...resolver.Mutation },
        };
    }, { Query: {}, Mutation: {} });
};

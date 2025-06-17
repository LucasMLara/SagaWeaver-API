import { NarratorService } from '../../services/NarratorService';

const narratorService = new NarratorService();

const narratorResolver = {
    Query: {
        narrators: async () => {
            return await narratorService.listNarrators();
        },
    },
    Mutation: {
        createNarrator: async (_parent: any, args: { name: string; email: string }) => {
            return await narratorService.createNarrator(args.name, args.email);
        },
    },
};

export default narratorResolver

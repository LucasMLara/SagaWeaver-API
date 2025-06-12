import { narratorResolver } from './narratorResolver';
import { campaignResolver } from './campaignResolver';
import { sessionResolver } from './sessionResolver';
import { plotSuggestionResolver } from './plotSuggestionResolver';
import { encounterTemplateResolver } from './encounterTemplateResolver';

export const resolvers = {
    Query: {
        ...narratorResolver.Query,
        ...campaignResolver.Query,
        ...sessionResolver.Query,
    },
    Mutation: {
        ...narratorResolver.Mutation,
        ...campaignResolver.Mutation,
        ...sessionResolver.Mutation,
        ...plotSuggestionResolver.Mutation,
        ...encounterTemplateResolver.Mutation,
    },
};

import { EncounterTemplateService } from '../../services/EncounterTemplateService';

const encounterTemplateService = new EncounterTemplateService();

export const encounterTemplateResolver = {
    Mutation: {
        createEncounterTemplate: async (
            _parent: any,
            args: { title: string; description: string; difficulty: string; sessionId: string }
        ) => {
            return await encounterTemplateService.createEncounterTemplate(
                args.title,
                args.description,
                args.difficulty,
                args.sessionId
            );
        },
    },
};

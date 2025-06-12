import prisma from '../lib/prisma';

export class EncounterTemplateRepository {
    async createEncounterTemplate(
        title: string,
        description: string,
        difficulty: string,
        sessionId: string
    ) {
        return await prisma.encounterTemplate.create({
            data: {
                title,
                description,
                difficulty,
                sessionId,
            },
        });
    }

    async listEncounterTemplatesBySession(sessionId: string) {
        return await prisma.encounterTemplate.findMany({
            where: { sessionId },
        });
    }
}

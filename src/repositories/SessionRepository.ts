import prisma from '../lib/prisma';

export class SessionRepository {
    async createSession(
        name: string,
        sessionDate: string,
        durationInMin: number,
        notes: string | undefined,
        narratorId: string,
        campaignId?: string
    ) {
        return await prisma.session.create({
            data: {
                name,
                sessionDate: new Date(sessionDate),
                durationInMin,
                notes,
                narratorId,
                campaignId
            },
        });
    }

    async getSessionsByNarrator(narratorId: string) {
        return await prisma.session.findMany({
            where: { narratorId },
            orderBy: { sessionDate: 'desc' },
        });
    }
}

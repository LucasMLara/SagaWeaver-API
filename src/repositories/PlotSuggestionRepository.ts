import prisma from '../lib/prisma';

export class PlotSuggestionRepository {
    async createPlotSuggestion(summary: string, fullPlot: string, sessionId: string) {
        return await prisma.plotSuggestion.create({
            data: {
                summary,
                fullPlot,
                sessionId,
            },
        });
    }

    async listPlotSuggestionsBySession(sessionId: string) {
        return await prisma.plotSuggestion.findMany({
            where: { sessionId },
        });
    }
}

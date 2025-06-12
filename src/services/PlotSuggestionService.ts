import { PlotSuggestionRepository } from "../repositories/PlotSuggestionRepository";

export class PlotSuggestionService {
    private plotSuggestionRepository = new PlotSuggestionRepository();

    async createPlotSuggestion(summary: string, fullPlot: string, sessionId: string) {
        return await this.plotSuggestionRepository.createPlotSuggestion(summary, fullPlot, sessionId);
    }

    async listPlotSuggestionsBySession(sessionId: string) {
        return await this.plotSuggestionRepository.listPlotSuggestionsBySession(sessionId);
    }
}

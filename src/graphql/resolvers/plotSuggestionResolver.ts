import { PlotSuggestionService } from '../../services/PlotSuggestionService';

const plotSuggestionService = new PlotSuggestionService();

export const plotSuggestionResolver = {
    Mutation: {
        createPlotSuggestion: async (
            _parent: any,
            args: { summary: string; fullPlot: string; sessionId: string }
        ) => {
            return await plotSuggestionService.createPlotSuggestion(
                args.summary,
                args.fullPlot,
                args.sessionId
            );
        },
    },
};

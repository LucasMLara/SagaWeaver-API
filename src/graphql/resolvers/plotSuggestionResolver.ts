import { PlotSuggestionService } from '../../services/PlotSuggestionService';

const plotSuggestionService = new PlotSuggestionService();

const plotSuggestionResolver = {
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

export default plotSuggestionResolver
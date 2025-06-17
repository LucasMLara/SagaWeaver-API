import { SessionService } from '../../services/SessionService';

const sessionService = new SessionService();

const sessionResolver = {
    Query: {
        sessionsByNarrator: async (_parent: any, args: { narratorId: string }) => {
            return await sessionService.getSessionsByNarrator(args.narratorId);
        },
    },
    Mutation: {
        createSession: async (
            _parent: any,
            args: {
                name: string;
                sessionDate: string;
                durationInMin: number;
                notes?: string;
                narratorId: string;
                campaignId?: string;
            }
        ) => {
            return await sessionService.createSession(
                args.name,
                args.sessionDate,
                args.durationInMin,
                args.notes,
                args.narratorId,
                args.campaignId
            );
        },
    },
};

export default sessionResolver;
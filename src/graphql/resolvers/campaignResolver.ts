import { CampaignService } from '../../services/CampaignService';

const campaignService = new CampaignService();

export const campaignResolver = {
    Query: {
        campaignsByNarrator: async (_parent: any, args: { narratorId: string }) => {
            return await campaignService.getCampaignsByNarrator(args.narratorId);
        },
    },
    Mutation: {
        createCampaign: async (_parent: any, args: { name: string; narratorId: string }) => {
            return await campaignService.createCampaign(args.name, args.narratorId);
        },
    },
};

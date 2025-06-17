import { CampaignService } from '../../services/CampaignService';

const campaignService = new CampaignService();

const campaignResolver = {
    Query: {
        campaignsByNarrator: async (_parent: any, args: { narratorId: string }) => {
            return await campaignService.getCampaignsByNarrator(args.narratorId);
        },
        campaignDetails: async (_parent: any, args: { id: string }) => {
            return await campaignService.getCampaignDetails(args.id);
        }
    },
    Mutation: {
        createCampaign: async (_parent: any, args: { name: string; narratorId: string }) => {
            return await campaignService.createCampaign(args.name, args.narratorId);
        },
    },
};

export default campaignResolver

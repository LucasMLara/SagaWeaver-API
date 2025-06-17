import { CampaignRepository } from '../repositories/CampaignRepository';

export class CampaignService {
    private campaignRepository = new CampaignRepository();

    async createCampaign(name: string, narratorId: string) {
        return await this.campaignRepository.createCampaign(name, narratorId);
    }

    async getCampaignById(id: string) {
        return await this.campaignRepository.getCampaignById(id);
    }

    async getCampaignsByNarrator(narratorId: string) {
        return await this.campaignRepository.listCampaignsByGameMaster(narratorId);
    }
    async getCampaignDetails(id: string) {
        return await this.campaignRepository.getCampaignDetails(id);
    }
}

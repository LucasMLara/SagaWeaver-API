import prisma from '../lib/prisma'

export class CampaignRepository {
    async createCampaign(name: string, narratorId: string) {
        return await prisma.campaign.create({
            data: {
                name,
                narratorId,
            },
        });
    }

    async getCampaignById(id: string) {
        return await prisma.campaign.findUnique({
            where: { id },
        });
    }

    async listCampaignsByGameMaster(narratorId: string) {
        return await prisma.campaign.findMany({
            where: { narratorId },
        });
    }

    async getCampaignDetails(id: string) {
        return await prisma.campaign.findUnique({
            where: { id },
            include: {
                narrator: true,
                sessions: {
                    include: {
                        plots: true,
                        encounters: true,
                    },
                },
            },
        });
    }

}

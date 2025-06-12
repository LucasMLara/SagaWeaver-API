import prisma from '../lib/prisma';

export class NarratorRepository {
    async createNarrator(name: string, email: string) {
        return await prisma.narrator.create({
            data: { name, email }
        });
    }

    async listNarrators() {
        return await prisma.narrator.findMany();
    }

    async getNarratorById(id: string) {
        return await prisma.narrator.findUnique({
            where: { id }
        });
    }
}

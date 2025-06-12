import { NarratorRepository } from "../repositories/NarratorRepository";

export class NarratorService {
    private narratorRepository: NarratorRepository;

    constructor() {
        this.narratorRepository = new NarratorRepository();
    }

    async createNarrator(name: string, email: string) {
        // No futuro podemos colocar regras aqui (ex.: validação de email duplicado)
        return await this.narratorRepository.createNarrator(name, email);
    }

    async listNarrators() {
        return await this.narratorRepository.listNarrators();
    }

    async getNarratorById(id: string) {
        return await this.narratorRepository.getNarratorById(id);
    }
}
